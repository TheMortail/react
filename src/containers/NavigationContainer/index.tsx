import NavigationComponent from '../../components/NavigationComponent';
import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home';
import Items from '../../pages/Items';
import About from '../../pages/About';
import Contact from '../../pages/Contact';
import RegisterPage from "../../pages/RegisterPage";
import LoginPage from "../../pages/LoginPage";

const NavigationContainer = () => {
  return (
    <>
      <NavigationComponent />
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/Items'} element={<Items />} />
        <Route path={'/About'} element={<About />} />
        <Route path={'/Contact'} element={<Contact />} />
        <Route path={'/Register'} element={<RegisterPage />} />
        <Route path={'/Login'} element={<LoginPage />} />
      </Routes>
    </>
  );
};

export default NavigationContainer;
