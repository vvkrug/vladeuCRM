import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = createRoot(rootElement);
  
  root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
} else {
  console.error("Корневой элемент не найден!");
}

