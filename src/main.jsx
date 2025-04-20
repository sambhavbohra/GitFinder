import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { GitHubProvider } from './context/GitHubContext';

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <GitHubProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GitHubProvider>
  // {/* </StrictMode> */}
);