import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { GithubProvider } from './context/GithubContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GithubProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GithubProvider>
  </React.StrictMode>
  
)
