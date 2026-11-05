export type ScreenType = 'START' | 'SELECT_CASE' | 'CASE_DETAIL' | 'END_GAME';

export type ClueType = 'email' | 'chat' | 'sms' | 'download' | 'social';

export interface QuestionOption {
  id: string;
  text: string;
  isCorrect: boolean;
}

export interface Question {
  id: string;
  text: string;
  options: QuestionOption[];
  feedback: string;
}

export interface GameCase {
  id: number;
  title: string;
  subtitle: string;
  clueType: ClueType;
  points: number;
  question: Question;
}

export interface GameState {
  currentScreen: ScreenType;
  activeCaseId: number | null;
  unlockedCaseIds: number[];
  completedCaseIds: number[];
  score: number;
  maxScore: number;
  studentName: string;
  isSoundMuted: boolean;
}

