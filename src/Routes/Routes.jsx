import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
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
import UpdateBook from '../Components/UpdateBook/UpdateBook';




export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path: '/',
        Component: Home,
      },
      {
        path: '/allBooks',
        Component: AllBooks,
      },
      {
        path: '/addBooks',
        element: <PrivateRoute>
          <AddBooks></AddBooks>
        </PrivateRoute>,
      },
      {
        path: '/myBooks',
        element: <PrivateRoute>
          <MyBooks></MyBooks>
        </PrivateRoute>,
      },
      {
        path: '/login',
        Component: Login,
      },
      {
        path: '/register',
        Component: Register,
      },
      {
        path: '/bookDitals/:id',
        Component: BookDitals,
      },
      {
        path: '/updateBook/:id',
        Component: UpdateBook,
      },



    ]
  }
]);

