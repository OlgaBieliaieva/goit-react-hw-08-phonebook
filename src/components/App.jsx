import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from '../redux/auth/operations';
import { useAuth } from '../hooks/useAuth';
//PAGES
import Home from '../pages/Home';
import Register from '../pages/Register';
//COMPONENTS
import { Loader } from './Loader/Loader';


const ContactsPage = lazy(() => import('../pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route
        path="/"
        element={
          <RestrictedRoute redirectTo="/contacts" component={<Home />} />
        }
      />
      <Route
        path="/register"
        element={
          <RestrictedRoute redirectTo="/contacts" component={<Register />} />
        }
      />
      <Route
        path="/contacts"
        element={<PrivateRoute redirectTo="/" component={<ContactsPage />} />}
      />
    </Routes>
  );
};
