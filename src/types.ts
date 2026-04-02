export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  section: string;
}

export type ExamStatus = 'welcome' | 'setup' | 'exam' | 'result';
export type ExamMode = 'practice' | 'exam';

export interface ExamState {
  status: ExamStatus;
  mode: ExamMode;
  questions: Question[];
  currentIndex: number;
  score: number;
  userAnswers: (string | null)[];
  showFeedback: boolean;
  lastAnswerCorrect: boolean | null;
}
