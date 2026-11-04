import React from 'react';
import { useGameState } from './hooks/useGameState';
import { useAudio } from './hooks/useAudio';
import { Header } from './components/common/Header';
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

  return (
    <div className="min-h-screen bg-[#FBF8F1] flex flex-col justify-between selection:bg-amber-200 selection:text-amber-900 font-cairo">
      {/* Top Navigation Header */}
      <Header
        currentScreen={gameState.currentScreen}
        score={gameState.score}
        maxScore={gameState.maxScore}
        isSoundMuted={gameState.isSoundMuted}
        onToggleSound={toggleSound}
        onGoBack={handleGoBack}
        onResetGame={resetGame}
        onAudioClick={playClick}
      />

      {/* Screen Routing */}
      <main className="flex-1 flex flex-col items-center justify-center w-full">
        {gameState.currentScreen === 'START' && (
          <StartScreen
            onStart={startInvestigation}
            onAudioClick={playClick}
          />
        )}

        {gameState.currentScreen === 'SELECT_CASE' && (
          <CaseSelectScreen
            unlockedCaseIds={gameState.unlockedCaseIds}
            completedCaseIds={gameState.completedCaseIds}
            onSelectCase={selectCase}
            onBack={() => goToScreen('START')}
            onAudioClick={playClick}
          />
        )}

        {gameState.currentScreen === 'CASE_DETAIL' && (
          <CaseScreen
            currentCase={activeCase}
            isLastCase={activeCase.id === 5}
            onCaseSolved={handleCaseSolved}
            onNextCase={handleNextCase}
            onAudioClick={playClick}
            onPlayCorrect={playCorrect}
            onPlayWrong={playWrong}
          />
        )}

        {gameState.currentScreen === 'END_GAME' && (
          <EndScreen
            score={gameState.score}
            maxScore={gameState.maxScore}
            studentName={gameState.studentName}
            onStudentNameChange={setStudentName}
            onResetGame={resetGame}
            onAudioClick={playClick}
            onPlayFanfare={playFanfare}
          />
        )}
      </main>

      {/* Bottom Footer Note */}
      <footer className="w-full text-center py-2 text-xs font-bold text-slate-400">
        منصة المحقق الرقمي © 2026 - مشروع الأمان السيبراني والسلامة الرقمية للطلاب
      </footer>
    </div>
  );
};

export default App;
