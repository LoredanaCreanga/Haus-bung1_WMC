import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="page-container center-content">
      <h1>404 - Seite nicht gefunden</h1>
      <p>Ups! Diese Adresse existiert leider nicht.</p>
      <Link to="/" className="primary-btn">Zurück zum Quiz</Link>
    </div>
  );
}

export default NotFound;