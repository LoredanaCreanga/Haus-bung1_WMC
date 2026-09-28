import { useState, useEffect, useCallback } from 'react';
import CategorySelect from '../components/CategorySelect';
import QuizCard from '../components/QuizCard';
import Feedback from '../components/Feedback';

function QuizPage() {
  const [category, setCategory] = useState('');
  const [questionData, setQuestionData] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [loading, setLoading] = useState(false);

  // Funktion zum Laden einer neuen Frage
  const fetchQuestion = useCallback(async () => {
    setLoading(true);
    setSelectedAnswer(null);

    let url = 'https://opentdb.com/api.php?amount=1&difficulty=easy';
    if (category) {
      url += `&category=${category}`;
    }

    try {
      const res = await fetch(url);
      const data = await res.json();

      if (data.results && data.results.length > 0) {
        const current = data.results[0];
        
        // 1. Alle Antworten kombinieren
        const allAnswers = [current.correct_answer, ...current.incorrect_answers];
        
        // 2. Antworten zufällig mischen (Shuffle)
        const shuffled = allAnswers.sort(() => Math.random() - 0.5);

        setQuestionData(current);
        setAnswers(shuffled);
      }
    } catch (error) {
      console.error('Fehler beim Laden:', error);
    } finally {
      setLoading(false);
    }
  }, [category]);

  // Bei erstem Laden & bei Kategoriewechsel neue Frage holen
  useEffect(() => {
    fetchQuestion();
  }, [fetchQuestion]);

  return (
    <div className="page-container">
      <header className="app-header">
        <h1>🧠 Open Trivia Quiz</h1>
        <CategorySelect selectedCategory={category} onSelectCategory={setCategory} />
      </header>

      <main className="quiz-main">
        {loading ? (
          <div className="loader">Question is loading...</div>
        ) : questionData ? (
          <>
            <QuizCard
              questionData={questionData}
              answers={answers}
              selectedAnswer={selectedAnswer}
              onAnswerSelect={setSelectedAnswer}
            />

            <Feedback
              selectedAnswer={selectedAnswer}
              correctAnswer={questionData.correct_answer}
            />

            <button className="primary-btn reload-btn" onClick={fetchQuestion}>
              Next question ➔
            </button>
          </>
        ) : (
          <p>No question found.</p>
        )}
      </main>
    </div>
  );
}

export default QuizPage;