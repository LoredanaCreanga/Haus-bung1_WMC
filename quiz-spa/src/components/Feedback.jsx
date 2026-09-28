function Feedback({ selectedAnswer, correctAnswer }) {
  if (!selectedAnswer) return null;

  const isCorrect = selectedAnswer === correctAnswer;

  return (
    <div className={`feedback ${isCorrect ? 'correct' : 'incorrect'}`}>
      {isCorrect ? (
        <p>🎉 Right! Great job!</p>
      ) : (
        <p>
          ❌ Wrong! The correct answer is:{' '}
          <strong dangerouslySetInnerHTML={{ __html: correctAnswer }} />
        </p>
      )}
    </div>
  );
}

export default Feedback;