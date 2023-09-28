import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// 1 - basic routing
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';

// 2 - parameterezid route
import User from './components/User.jsx';

// 4 - error route
import NotFound from './components/NotFound.jsx';

// 5 - search / query params
import Search from './components/Search.jsx';

// 6 - protected route
const isAuth = false;
import { Navigate } from 'react-router-dom';

// page configuration
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/contato',
        element: <Contact />
      },
      {
        path: '/sobre',
        element: isAuth ? <About /> : <Navigate to={'/'} />
      },
      {
        path: '/usuarios/:userId',
        element: <User />
      },
      {
        path: '/search',
        element: <Search />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
