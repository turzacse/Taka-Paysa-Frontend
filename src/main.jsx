import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Client from './Layout/Client.jsx';
import Home from './Page/Home/Home.jsx';
import Dashboard from './Page/Dashboard/Dashboard.jsx';
import AddTransactionPage from './Page/AddTransaction/AddTransactionPage.jsx';
import ReportsAnalyticsPage from './Page/Report/ReportsAnalyticsPage.jsx';
import CategoriesManagementPage from './Page/CategoriesManagement/CategoriesManagementPage.jsx';
import Admin from './Layout/Dashboard.jsx';
import { AuthProvider } from './Context/AuthContext.jsx';
import Login from './Page/Authentications/Login.jsx';
import Signup from './Page/Authentications/Signup.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Client/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      // {
      //   path: '/dashboard',
      //   element: <Dashboard/>
      // },
      {
        path: '/transaction',
        element: <AddTransactionPage/>
      },
      {
        path: '/report',
        element: <ReportsAnalyticsPage/>

      },
      {
        path: '/category',
        element: <CategoriesManagementPage/>
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/signup',
        element: <Signup/>
      }
    ]
  },
  {
    path : '/dashboard',
    element: <Admin/>,
    children: [
      {
        path: '/dashboard/category',
        element: <CategoriesManagementPage/>
      },
      {
        path: '/dashboard/transaction',
        element: <AddTransactionPage/>
      },
      {
        path: '/dashboard/report',
        element: <ReportsAnalyticsPage/>

      },

    ]
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
