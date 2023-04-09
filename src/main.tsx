import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import NavBar from './components/NavBar';
import Register from './components/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

import indexRoutes from './routes/index.js';
import { RouterProvider } from 'react-router-dom';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={indexRoutes} />
    {/* <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
      <ToastContainer />
      <Footer />
    </BrowserRouter> */}
  </React.StrictMode>
);
