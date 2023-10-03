import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App  from './App';
import './css/index.css'
const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />)