import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import authServicesInstance from './appwrite/auth'; // Ensure correct import
import { logout, login } from './store/AuthSlice';

const App = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authServicesInstance.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ user: userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1>Hii</h1>
    </>
  );
};

export default App;
