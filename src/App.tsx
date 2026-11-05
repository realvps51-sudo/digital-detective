import React from 'react';
import { useGameState } from './hooks/useGameState';
import { useAudio } from './hooks/useAudio';
import { StartScreen } from './components/screens/StartScreen';
import { CaseSelectScreen } from './components/screens/CaseSelectScreen';
import { CaseScreen } from './components/screens/CaseScreen';
import { EndScreen } from './components/screens/EndScreen';
import { CASES_DATA } from './data/casesData';

export const App: React.FC = () => {
  const {
    gameState,
    goToScreen,
    startInvestigation,
    selectCase,
    completeCase,
    toggleSound,
    setStudentName,
    resetGame,
  } = useGameState();

  const { playClick, playCorrect, playWrong, playFanfare } = useAudio(gameState.isSoundMuted);

  const activeCase =
    CASES_DATA.find((c) => c.id === gameState.activeCaseId) || CASES_DATA[0];

  const handleCaseSolved = (caseId: number) => {
    completeCase(caseId);
  };

  const handleNextCase = () => {
    if (!activeCase) return;

    if (activeCase.id >= 5) {
      goToScreen('END_GAME');
    } else {
      const nextId = activeCase.id + 1;
      selectCase(nextId);
    }
  };

  const handleGoBack = () => {
    if (gameState.currentScreen === 'CASE_DETAIL') {
      goToScreen('SELECT_CASE');
    } else if (gameState.currentScreen === 'SELECT_CASE') {
      goToScreen('START');
    } else if (gameState.currentScreen === 'END_GAME') {
      goToScreen('SELECT_CASE');
    }
  };

  // Screen 1: Start Screen (Fullscreen)
  if (gameState.currentScreen === 'START') {
    return (
      <StartScreen
        onStart={startInvestigation}
        onAudioClick={playClick}
        isSoundMuted={gameState.isSoundMuted}
        onToggleSound={toggleSound}
      />
    );
  }

  // Screen 2: Case Selection Corkboard (Fullscreen)
  if (gameState.currentScreen === 'SELECT_CASE') {
    return (
      <CaseSelectScreen
        unlockedCaseIds={gameState.unlockedCaseIds}
        completedCaseIds={gameState.completedCaseIds}
        score={gameState.score}
        maxScore={gameState.maxScore}
        isSoundMuted={gameState.isSoundMuted}
        onToggleSound={toggleSound}
        onSelectCase={selectCase}
        onBack={() => goToScreen('START')}
        onAudioClick={playClick}
      />
    );
  }

  // Screens 3 to 7: All 5 Investigation Cases (Fullscreen)
  if (gameState.currentScreen === 'CASE_DETAIL') {
    return (
      <CaseScreen
        currentCase={activeCase}
        isLastCase={activeCase.id === 5}
        score={gameState.score}
        isSoundMuted={gameState.isSoundMuted}
        onToggleSound={toggleSound}
        onCaseSolved={handleCaseSolved}
        onNextCase={handleNextCase}
        onBack={handleGoBack}
        onAudioClick={playClick}
        onPlayCorrect={playCorrect}
        onPlayWrong={playWrong}
      />
    );
  }

  // Screen 8: End Screen & Certificate (Fullscreen)
  if (gameState.currentScreen === 'END_GAME') {
    return (
      <EndScreen
        score={gameState.score}
        maxScore={gameState.maxScore}
        studentName={gameState.studentName}
        isSoundMuted={gameState.isSoundMuted}
        onToggleSound={toggleSound}
        onStudentNameChange={setStudentName}
        onResetGame={resetGame}
        onAudioClick={playClick}
        onPlayFanfare={playFanfare}
      />
    );
  }

  return null;
};

export default App;
