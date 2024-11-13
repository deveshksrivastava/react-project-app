import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './roots/root';
import ErrorPage from './error-page';
import Contact from './roots/contact';
import ManuBar from './roots/menu';
import About from './roots/about';
import Excercise from './roots/excercise';
import Service from './roots/service';

const router = createBrowserRouter([
  {
    path: "/",
    element: <ManuBar />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/aboutssdsd",
    element: <About />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/root",
    element: <Root/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "contacts/:contactId",
    element: <Contact />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/excercise",
    element: <Excercise />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/service/:id",
    element: <Service />,
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
