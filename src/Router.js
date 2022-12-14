import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
  } from 'react-router-dom'
  
  import NotFound from './pages/404';
  import Admin from './pages/Admin';
  import Home from './pages/Home';
  import Login from './pages/Login';
  
  function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/admin" element={<Admin/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="*" element={<NotFound/>} />
            </Routes>
        </BrowserRouter>
    );
  }

  export default Router;