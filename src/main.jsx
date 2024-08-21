import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux'; 
import store from './store/store.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AuthLayout from './components/AuthLayout.jsx'

import Home from './Pages/Home.jsx'
import Login from './Pages/Login.jsx';
import Signup from './components/Signup.jsx';


const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[{
      path:'/',
      element:<Home/>
    },{
      path:'/login',
      element:(
      <AuthLayout authentication="false">
        <Login/>
      </AuthLayout>
    )
    },{
      path:'/signup',
      element:<Signup/>
    }
  ]
  }
])
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
  </Provider>
);
