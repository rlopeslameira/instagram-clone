import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Home from './Home';
import Login from './Login';

const PrivateRoute = ({ element: Element, ...rest }) => {
    return (
        <Route {...rest} render={props => (
            localStorage.getItem('instagram.usuario') ? (
              <Element {...props} />
            ) : (
              <Navigate to="/" />
            )
        )} />
    )
}

  const RoutesSwitch = () => (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={Login} />     
        <PrivateRoute exact path="/" element={Home} />
      </Routes>
    </BrowserRouter>
  );
  
  export default RoutesSwitch;