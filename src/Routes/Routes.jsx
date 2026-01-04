import React, { useContext } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import AllBooks from '../Pages/AllBooks/AllBooks';
import AddBooks from '../Pages/AddBooks/AddBooks';
import MyBooks from '../Pages/MyBooks/MyBooks';
import Login from '../Components/Login/Login';
import Register from '../Components/Register/Register';
import BookDitals from '../Components/BookDitals/BookDitals';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import DashboardLayout from '../Layouts/Dashboard/DashboardLayout';
import Profile from '../Pages/Profile';
import UpdateBook from '../Layouts/UpdateBook';
import AdminHome from '../Pages/Dashboard/AdminDashboard/AdminHome';
import ManageUsers from '../Pages/Dashboard/AdminDashboard/ManageUsers';
import ManageBooks from '../Pages/Dashboard/AdminDashboard/ManageBooks';
import { AuthContext } from '../context/AuthContex'; // বানানটি পুনরায় চেক করুন (Context vs Contex)
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Services from '../Pages/Services.jsx';

// DashboardIndex component
const DashboardIndex = () => {
    const { isAdmin, loading } = useContext(AuthContext);
    
    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <span className="loading loading-spinner loading-lg text-primary"></span>
            </div>
        );
    }
    
    return isAdmin ? <AdminHome /> : <Profile />;
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: 'allBooks', element: <AllBooks /> },
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: 'bookDitals/:id', element: <BookDitals /> },
      {
        path: 'about',
        Component: About
      },
      {
        path: 'contact',
        Component: Contact,
      },
      {
        path: 'service',
        Component: Services,
      }
    ]
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true, 
        element: <DashboardIndex /> 
      },
      {
        path: 'adminHome',
        element: <AdminHome />
      },
      {
        path: 'manageUsers',
        element: <ManageUsers />
      },
      {
        path: 'manageBooks',
        element: <ManageBooks />
      },
      {
        path: 'myBooks',
        element: <MyBooks />
      },
      {
        path: 'addBooks',
        element: <AddBooks />
      },
      {
        path: 'updateBook/:id',
        element: <UpdateBook />
      },
      {
        path: 'profile',
        element: <Profile />
      },
    ]
  }
]);