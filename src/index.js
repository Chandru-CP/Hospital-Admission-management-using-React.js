import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from './pages/Login';
import SignIn from './pages/SignIn';
import NoPage from "./pages/NoPage";
import Booking from './pages/Booking';
import Dashboard from "./pages/Dashboard";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="Signin"  element={<SignIn/>} />
        <Route path="Home" element={<Home/>} />
        <Route path="Dashboard" element={<Dashboard />} />
        <Route path='Booking' element={<Booking/>}/>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);



