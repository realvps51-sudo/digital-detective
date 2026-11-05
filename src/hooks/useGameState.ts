import { useState, useEffect, useCallback } from 'react';
import { GameState, ScreenType } from '../types/game';

const STORAGE_KEY = 'DIGITAL_DETECTIVE_PROGRESS_V1';

const INITIAL_STATE: GameState = {
  currentScreen: 'START',
  activeCaseId: null,
  unlockedCaseIds: [1],
  completedCaseIds: [],
  score: 0,
  maxScore: 50,
  studentName: '',
  isSoundMuted: false,
};

export const useGameState = () => {
  const [gameState, setGameState] = useState<GameState>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          ...INITIAL_STATE,
          ...parsed,
          currentScreen: 'START', // Always start on home screen on page refresh
          activeCaseId: null,
        };
      }
    } catch (e) {
      console.error('Failed to load saved state:', e);
    }
    return INITIAL_STATE;
  });

  // Save changes to localStorage
  useEffect(() => {
    try {
      const { currentScreen, activeCaseId, ...persistedState } = gameState;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(persistedState));
    } catch (e) {
      console.error('Failed to save state:', e);
    }
  }, [gameState]);

  const goToScreen = useCallback((screen: ScreenType) => {
    setGameState((prev) => ({ ...prev, currentScreen: screen }));
  }, []);

  const startInvestigation = useCallback(() => {
    setGameState((prev) => ({ ...prev, currentScreen: 'SELECT_CASE' }));
  }, []);

  const selectCase = useCallback((caseId: number) => {
    setGameState((prev) => {
      if (prev.unlockedCaseIds.includes(caseId)) {
        return {
          ...prev,
          activeCaseId: caseId,
          currentScreen: 'CASE_DETAIL',
        };
      }
      return prev;
    });
  }, []);

  const completeCase = useCallback((caseId: number) => {
    setGameState((prev) => {
      const isAlreadyCompleted = prev.completedCaseIds.includes(caseId);
      const nextUnlocked = prev.unlockedCaseIds.includes(caseId + 1)
        ? prev.unlockedCaseIds
        : caseId < 5
        ? [...prev.unlockedCaseIds, caseId + 1]
        : prev.unlockedCaseIds;

      const newCompleted = isAlreadyCompleted
        ? prev.completedCaseIds
        : [...prev.completedCaseIds, caseId];

      const newScore = isAlreadyCompleted ? prev.score : Math.min(prev.score + 10, prev.maxScore);

      return {
        ...prev,
        completedCaseIds: newCompleted,
        unlockedCaseIds: nextUnlocked,
        score: newScore,
      };
    });
  }, []);

  const toggleSound = useCallback(() => {
    setGameState((prev) => ({ ...prev, isSoundMuted: !prev.isSoundMuted }));
  }, []);

  const setStudentName = useCallback((name: string) => {
    setGameState((prev) => ({ ...prev, studentName: name }));
  }, []);

  const resetGame = useCallback(() => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      console.error('Failed to clear storage:', e);
    }
    setGameState(INITIAL_STATE);
  }, []);

  return {
    gameState,
    goToScreen,
    startInvestigation,
    selectCase,
    completeCase,
    toggleSound,
    setStudentName,
    resetGame,
  };
};

