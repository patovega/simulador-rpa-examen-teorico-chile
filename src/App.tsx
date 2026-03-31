import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  XCircle, 
  ChevronRight, 
  RotateCcw, 
  Trophy, 
  BookOpen, 
  ShieldCheck, 
  CloudSun, 
  Wind 
} from 'lucide-react';
import { Question, ExamState, ExamStatus } from './types';
import { questionBank } from './questions';

export default function App() {
  const [state, setState] = useState<ExamState>({
    status: 'welcome',
    questions: [],
    currentIndex: 0,
    score: 0,
    userAnswers: [],
    showFeedback: false,
    lastAnswerCorrect: null,
  });

  const [selectedCount, setSelectedCount] = useState<number>(47);

  const startExam = (count: number) => {
    const shuffled = [...questionBank].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, count);
    setState({
      status: 'exam',
      questions: selected,
      currentIndex: 0,
      score: 0,
      userAnswers: [],
      showFeedback: false,
      lastAnswerCorrect: null,
    });
  };

  const handleAnswer = (answer: string) => {
    if (state.showFeedback) return;

    const currentQuestion = state.questions[state.currentIndex];
    const isCorrect = answer === currentQuestion.correctAnswer;

    setState(prev => ({
      ...prev,
      score: isCorrect ? prev.score + 1 : prev.score,
      userAnswers: [...prev.userAnswers, answer],
      showFeedback: true,
      lastAnswerCorrect: isCorrect,
    }));
  };

  const nextQuestion = () => {
    if (state.currentIndex + 1 < state.questions.length) {
      setState(prev => ({
        ...prev,
        currentIndex: prev.currentIndex + 1,
        showFeedback: false,
        lastAnswerCorrect: null,
      }));
    } else {
      setState(prev => ({
        ...prev,
        status: 'result',
      }));
    }
  };

  const resetExam = () => {
    setState({
      status: 'welcome',
      questions: [],
      currentIndex: 0,
      score: 0,
      userAnswers: [],
      showFeedback: false,
      lastAnswerCorrect: null,
    });
  };

  const percentage = state.questions.length > 0 
    ? Math.round((state.score / state.questions.length) * 100) 
    : 0;

  const isPassed = percentage >= 75;

  return (
    <div className="min-h-screen bg-[#E4E3E0] text-[#141414] font-sans selection:bg-[#141414] selection:text-[#E4E3E0]">
      {/* Header / Grid Lines Decor */}
      <div className="fixed inset-0 pointer-events-none opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#141414 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>

      <main className="relative z-10 max-w-2xl mx-auto px-6 py-12 min-h-screen flex flex-col">
        <AnimatePresence mode="wait">
          {state.status === 'welcome' && (
            <motion.div 
              key="welcome"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex-1 flex flex-col justify-center"
            >
              <div className="border-l-4 border-[#141414] pl-6 mb-12">
                <h1 className="text-5xl font-serif italic leading-tight mb-4">
                  Simulador de examen TEORICO OPERADOR RPA
                </h1>
                <p className="text-lg opacity-70 font-mono">
                  DGAC CHILE • CREDENCIAL DE OPERADOR
                </p>
                <p className="text-[10px] uppercase tracking-widest font-bold opacity-40 mt-2">
                  Autor: Patricio Vega
                </p>
              </div>

              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 border border-[#141414]/20 rounded-sm bg-white/50">
                    <ShieldCheck className="w-6 h-6 mb-2" />
                    <h3 className="text-xs uppercase tracking-widest font-bold mb-1">Normativa</h3>
                    <p className="text-xs opacity-60">DAN 91 y DAN 151</p>
                  </div>
                  <div className="p-4 border border-[#141414]/20 rounded-sm bg-white/50">
                    <CloudSun className="w-6 h-6 mb-2" />
                    <h3 className="text-xs uppercase tracking-widest font-bold mb-1">Meteorología</h3>
                    <p className="text-xs opacity-60">Condiciones y fenómenos</p>
                  </div>
                  <div className="p-4 border border-[#141414]/20 rounded-sm bg-white/50">
                    <Wind className="w-6 h-6 mb-2" />
                    <h3 className="text-xs uppercase tracking-widest font-bold mb-1">Aerodinámica</h3>
                    <p className="text-xs opacity-60">Principios de vuelo</p>
                  </div>
                </div>

                <div className="bg-white border border-[#141414] p-8 rounded-sm shadow-[8px_8px_0px_0px_rgba(20,20,20,1)]">
                  <p className="mb-6 leading-relaxed">
                    Bienvenido. Este simulador es <span className="font-bold">solo con fines educativos</span>. El banco contiene 47 preguntas. 
                    Necesitas un <span className="font-bold">75%</span> para aprobar.
                  </p>
                  
                  <div className="space-y-4">
                    <label className="block text-xs uppercase tracking-widest font-bold opacity-50">
                      Cantidad de preguntas
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {[10, 20, 47].map(count => (
                        <button
                          key={count}
                          onClick={() => setSelectedCount(count)}
                          className={`px-6 py-2 border border-[#141414] transition-all ${
                            selectedCount === count 
                              ? 'bg-[#141414] text-[#E4E3E0]' 
                              : 'hover:bg-[#141414]/5'
                          }`}
                        >
                          {count === 47 ? 'Todas (47)' : count}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => startExam(selectedCount)}
                    className="mt-10 w-full py-4 bg-[#141414] text-[#E4E3E0] font-bold uppercase tracking-[0.2em] hover:bg-[#141414]/90 transition-colors flex items-center justify-center gap-2"
                  >
                    Iniciar Examen <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {state.status === 'exam' && (
            <motion.div 
              key="exam"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex-1 flex flex-col"
            >
              {/* Progress Header */}
              <div className="flex justify-between items-end mb-8 border-b border-[#141414]/10 pb-4">
                <div>
                  <span className="text-[10px] uppercase tracking-widest font-bold opacity-40 block mb-1">
                    {state.questions[state.currentIndex].section}
                  </span>
                  <div className="text-2xl font-serif italic">
                    Pregunta {state.currentIndex + 1} <span className="text-sm opacity-40 not-italic font-sans">/ {state.questions.length}</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] uppercase tracking-widest font-bold opacity-40 block mb-1">Puntaje</span>
                  <div className="flex items-center gap-2 font-mono text-lg">
                    <CheckCircle2 className="w-4 h-4 text-green-600" /> {state.score}
                  </div>
                </div>
              </div>

              {/* Question Card */}
              <div className="flex-1">
                <h2 className="text-xl md:text-2xl leading-snug mb-10 font-medium">
                  {state.questions[state.currentIndex].text}
                </h2>

                <div className="space-y-3">
                  {state.questions[state.currentIndex].options.map((option, idx) => {
                    const isSelected = state.userAnswers[state.currentIndex] === option;
                    const isCorrect = option === state.questions[state.currentIndex].correctAnswer;
                    
                    let buttonClass = "w-full p-5 text-left border border-[#141414]/20 rounded-sm transition-all flex justify-between items-center group ";
                    
                    if (state.showFeedback) {
                      if (isCorrect) {
                        buttonClass += "bg-green-50 border-green-600 text-green-900";
                      } else if (isSelected) {
                        buttonClass += "bg-red-50 border-red-600 text-red-900";
                      } else {
                        buttonClass += "opacity-40";
                      }
                    } else {
                      buttonClass += "hover:border-[#141414] hover:bg-white cursor-pointer";
                    }

                    return (
                      <button
                        key={idx}
                        disabled={state.showFeedback}
                        onClick={() => handleAnswer(option)}
                        className={buttonClass}
                      >
                        <span className="flex-1 pr-4">{option}</span>
                        {state.showFeedback && isCorrect && <CheckCircle2 className="w-5 h-5 flex-shrink-0" />}
                        {state.showFeedback && isSelected && !isCorrect && <XCircle className="w-5 h-5 flex-shrink-0" />}
                      </button>
                    );
                  })}
                </div>

                {/* Feedback Area */}
                <AnimatePresence>
                  {state.showFeedback && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="mt-8 overflow-hidden"
                    >
                      <div className={`p-6 border-l-4 ${state.lastAnswerCorrect ? 'border-green-600 bg-green-50/50' : 'border-red-600 bg-red-50/50'}`}>
                        <h4 className="text-xs uppercase tracking-widest font-bold mb-2">
                          {state.lastAnswerCorrect ? '¡Correcto!' : 'Incorrecto'}
                        </h4>
                        <p className="text-sm leading-relaxed opacity-80">
                          {state.questions[state.currentIndex].explanation}
                        </p>
                        <button
                          onClick={nextQuestion}
                          className="mt-6 px-8 py-3 bg-[#141414] text-[#E4E3E0] text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-[#141414]/90 transition-colors"
                        >
                          {state.currentIndex + 1 === state.questions.length ? 'Ver Resultados' : 'Siguiente Pregunta'}
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          )}

          {state.status === 'result' && (
            <motion.div 
              key="result"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex-1 flex flex-col justify-center items-center text-center"
            >
              <div className="mb-8">
                {isPassed ? (
                  <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Trophy className="w-12 h-12" />
                  </div>
                ) : (
                  <div className="w-24 h-24 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <BookOpen className="w-12 h-12" />
                  </div>
                )}
                
                <h2 className="text-4xl font-serif italic mb-2">
                  {isPassed ? '¡Aprobado!' : 'Necesitas Estudiar Más'}
                </h2>
                <p className="text-mono opacity-50 uppercase tracking-widest text-xs">
                  Resultado Final del Simulador
                </p>
              </div>

              <div className="w-full max-w-sm bg-white border border-[#141414] p-8 rounded-sm shadow-[12px_12px_0px_0px_rgba(20,20,20,1)] mb-12">
                <div className="grid grid-cols-2 gap-8 mb-8">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest font-bold opacity-40 block mb-1">Puntaje</span>
                    <div className="text-3xl font-mono">{state.score} / {state.questions.length}</div>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest font-bold opacity-40 block mb-1">Porcentaje</span>
                    <div className={`text-3xl font-mono ${isPassed ? 'text-green-600' : 'text-red-600'}`}>{percentage}%</div>
                  </div>
                </div>
                
                <div className="h-2 w-full bg-[#141414]/10 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${percentage}%` }}
                    className={`h-full ${isPassed ? 'bg-green-600' : 'bg-red-600'}`}
                  />
                </div>
                <div className="mt-2 text-[10px] text-right opacity-40 font-bold">MIN. APROBACIÓN: 75%</div>
              </div>

              <div className="flex flex-col gap-4 w-full max-w-xs">
                <button
                  onClick={resetExam}
                  className="w-full py-4 bg-[#141414] text-[#E4E3E0] font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-[#141414]/90 transition-colors"
                >
                  <RotateCcw className="w-5 h-5" /> Reintentar Examen
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer Info */}
      <footer className="relative z-10 max-w-2xl mx-auto px-6 py-8 border-t border-[#141414]/10 text-[10px] uppercase tracking-[0.2em] font-bold opacity-30 flex justify-between items-center">
        <div className="flex flex-col gap-1">
          <span>DGAC Chile Simulator • Solo con fines educativos</span>
          <span>Autor: Patricio Vega</span>
        </div>
        <span>v1.0.1</span>
      </footer>
    </div>
  );
}
