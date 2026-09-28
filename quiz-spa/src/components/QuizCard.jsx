function QuizCard({ questionData, answers, selectedAnswer, onAnswerSelect }) {
  return (
    <div className="quiz-card">
      {/* HTML-Entities wie &quot; sauber darstellen */}
      <h2
        className="question-text"
        dangerouslySetInnerHTML={{ __html: questionData.question }}
      />

      <div className="answers-grid">
        {answers.map((answer, index) => {
          let btnClass = 'answer-btn';
          if (selectedAnswer) {
            if (answer === selectedAnswer) {
              btnClass += answer === questionData.correct_answer ? ' selected-correct' : ' selected-incorrect';
            } else if (answer === questionData.correct_answer) {
              btnClass += ' show-correct';
            }
          }

          return (
            <button
              key={index}
              className={btnClass}
              disabled={!!selectedAnswer}
              onClick={() => onAnswerSelect(answer)}
              dangerouslySetInnerHTML={{ __html: answer }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default QuizCard;