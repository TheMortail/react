import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectLoggedInUser } from '../../store/auth/AuthSelector';

const Index = () => {
  const loggedInUser = useSelector(selectLoggedInUser);

  return (
    <nav>
      <li>
        <Link to="/">Kezdolap</Link>
      </li>

      {loggedInUser.loggedIn && (
        <>
          <li>
            <Link to="/Products">Termekek</Link>
          </li>
          <li>
            <Link to="/Cart">Kosar</Link>
          </li>
          <li>
            <Link to="/About">Rolunk</Link>
          </li>
          <li>
            <Link to="/Contact">Kapcsolat</Link>
          </li>
        </>
      )}
      {!loggedInUser.loggedIn && (
        <>
          {' '}
          <li>
            <Link to="/Register">Registralas</Link>
          </li>
          <li>
            <Link to="/Login">Bejelentkezes</Link>
          </li>
        </>
      )}
    </nav>
  );
};

export default Index;
