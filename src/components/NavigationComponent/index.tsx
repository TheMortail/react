import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <nav>
      <li>
        <Link to="/">Kezdolap</Link>
      </li>
      <li>
        <Link to="/Items">Termekek</Link>
      </li>
      <li>
        <Link to="/About">Rolunk</Link>
      </li>
      <li>
        <Link to="/Contact">Kapcsolat</Link>
      </li>
      <li>
        <Link to="/Register">Registralas</Link>
      </li>
      <li>
        <Link to="/Login">Bejelentkezes</Link>
      </li>
    </nav>
  );
};

export default Index;
