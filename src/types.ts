export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  section: string;
}

export type ExamStatus = 'welcome' | 'setup' | 'exam' | 'result';

export interface ExamState {
  status: ExamStatus;
  questions: Question[];
  currentIndex: number;
  score: number;
  userAnswers: string[];
  showFeedback: boolean;
  lastAnswerCorrect: boolean | null;
}
