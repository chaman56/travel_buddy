import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, BrowserRouter as Router} from 'react-router-dom';
import { UserAuthContextProvider } from './context/UserAuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserAuthContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </UserAuthContextProvider>
);


