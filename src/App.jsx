import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import authServicesInstance from './appwrite/auth';
import { logout, login } from './store/AuthSlice';
import {Header, Footer,Login } from './components/index'
import { Outlet, Route } from'react-router-dom';

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
      <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
        <div className="w-full block">
          <Route path='/login' Component={<Login/>} />
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
