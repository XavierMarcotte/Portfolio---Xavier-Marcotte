import React from "react";
import { createRoot } from 'react-dom/client';
import App from './components/App/index.js'; 


const rootDOMElement = document.querySelector('.app');
const root = createRoot(rootDOMElement);
root.render(<App />);