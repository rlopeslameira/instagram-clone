import React from 'react';
import { ToastContainer } from 'react-toastify';

import GlobalContext from './context';
import RoutesSwitch from './routes.js';

function App() {

  return (
    <GlobalContext>
      <RoutesSwitch />      
      <ToastContainer autoClose={3000} />
    </GlobalContext>
  );
}

export default App;
