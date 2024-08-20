import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux'; 
import store from './store/store.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Login,SignUp,AuthLayout } from './components/index.js';


const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children: [
      {
        path:'/login',
        element:(
        <AuthLayout authentication={true}>
          <Login/>
        </AuthLayout>
        )
        
      },{
        path:'/signup',
        element:<SignUp/>
      },{
        
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
