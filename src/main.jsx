import React from 'react';import{createRoot}from'react-dom/client';import{HashRouter}from'react-router-dom';import{ShopProvider}from'./context/ShopContext';import App from './routes/App';import './styles.css';
createRoot(document.getElementById('root')).render(<React.StrictMode><HashRouter><ShopProvider><App/></ShopProvider></HashRouter></React.StrictMode>);
