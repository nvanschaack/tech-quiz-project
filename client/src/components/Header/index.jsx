import { Link, redirect } from 'react-router-dom';
import QuizForm from '../../pages/QuizForm';
import HomePage from '../../pages/Home';
import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  const homePage = () => {
    document.location.assign('/');
  }

  const quizForm = () => {
    document.location.assign('/QuizForm')
  };

  return (
    <header className="bg-info text-dark mb-4 py-3 display-flex align-center">
      <div className="container flex-column justify-space-between-lg justify-center align-center text-center">
        <Link className="text-dark" to="/">
          <h1 className="m-0" style={{ fontSize: '3rem' }}>
            Tech Quiz
          </h1>
        </Link>
        <p className="m-0" style={{ fontSize: '1.75rem', fontWeight: '700' }}>
          Come mold your mind with other like minded programmers. To be the best you have to study with the best.
        </p>
        <div>
          {Auth.loggedIn() ? (
            <>
             <button className="btn btn-lg btn-light m-2" onClick={homePage}>
                Home
              </button>
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
              <button className="btn btn-lg btn-light m-2" onClick={quizForm}>
                Take Quiz
              </button>
            </>
          ) : (
            <>
              <Link className="btn btn-lg btn-primary m-2" to="/login">
                Login
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/signup">
                Signup
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/">
                Home
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
