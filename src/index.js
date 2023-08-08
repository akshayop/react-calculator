import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { ToastContainer } from 'react-toastify';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    <App />
  </React.StrictMode>
);


