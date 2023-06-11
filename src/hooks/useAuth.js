import { useDispatch, useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
} from 'redux/auth/selectors';
import * as operations from '../redux/auth/operations';

export const useAuth = () => {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);

  const register = async credentials => {
    await dispatch(operations.register(credentials)).unwrap();
  };

  const logIn = async credentials => {
    await dispatch(operations.logIn(credentials)).unwrap();
  };

  const logOut = async user => {
    await dispatch(operations.logOut(user)).unwrap();
  };

  const refreshUser = async () => {
    await dispatch(operations.refreshUser()).unwrap();
  };

  return {
    isLoggedIn,
    isRefreshing,
    user,
    register,
    logIn,
    logOut,
    refreshUser,
  };
};
