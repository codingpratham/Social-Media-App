import React from 'react'
import { useDispatch } from 'react-redux';
import { Header } from '../components';
import { Outlet } from 'react-router-dom';
const Home = () => {
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
  
  return  !loading ? (
    <>
    <Header/>
    <main>
        <Outlet/>
    </main>
    <Footer/>
    </>
  ): null;
} 

export default Home