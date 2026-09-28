import { Routes, Route } from 'react-router-dom';
import QuizPage from './pages/QuizPage';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<QuizPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;