import NavigationComponent from '../../components/NavigationComponent';
import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home';
import Products from '../../pages/Products';
import About from '../../pages/About';
import Contact from '../../pages/Contact';
import RegisterPage from '../../pages/RegisterPage';
import LoginPage from '../../pages/LoginPage';
import Construction from '../../pages/Construction';
import CartPage from '../../pages/CartPage';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { selectLoggedInUser } from '../../store/auth/AuthSelector';
const RequireAuth: FC<{ children: React.ReactElement }> = ({ children }) => {
  const loggedInUser = useSelector(selectLoggedInUser);
  const userIsLogged = loggedInUser.loggedIn;
  if (!userIsLogged) {
    return <LoginPage />;
  }
  return children;
};
const NavigationContainer = () => {
  return (
    <>
      <NavigationComponent />
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route
          path={'/Products'}
          element={
            <RequireAuth>
              <Products />
            </RequireAuth>
          }
        />
        <Route
          path={'/About'}
          element={
            <RequireAuth>
              <About />
            </RequireAuth>
          }
        />
        <Route
          path={'/Contact'}
          element={
            <RequireAuth>
              <Contact />
            </RequireAuth>
          }
        />
        <Route path={'/Register'} element={<RegisterPage />} />
        <Route path={'/Login'} element={<LoginPage />} />
        <Route
          path={'/Cart'}
          element={
            <RequireAuth>
              <CartPage />
            </RequireAuth>
          }
        />
        <Route path={'/under-construction'} element={<Construction />} />
      </Routes>
    </>
  );
};

export default NavigationContainer;
