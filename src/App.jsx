import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import authServicesInstance from './appwrite/auth';
import { logout, login } from './store/AuthSlice';
import {Header, Footer } from './components/index'
import { Outlet } from'react-router-dom';

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

  return !loading ? (
    <>
      <div className="min-h-screen flex flex-wrap content-between ">
        <div className="w-full block">
          <Header/>
          <main>
            <Outlet/>
          </main>
          <Footer/>
        </div>
      </div>
    </>
  ) : null;  
};

export default App;
