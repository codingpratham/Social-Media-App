import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux'; 
import store from './store/store.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Login } from './components/index.js';
import SignUp from './components/SignUp.jsx';
import Protected from './components/AuthLayout.jsx';


const router = createBrowserRouter([
  {
    path:'/',
    element:<Protected>
      <App/>
      </Protected>,
    children: [
      {
        path:'/login',
        element:<Login/>
      },{
        path:'/signup',
        element:<SignUp/>
      }
      
    ]
  },

])
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
  </Provider>
);
