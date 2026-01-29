import React from 'react';
import ReactDOM from 'react-dom/client';
import "./styles/global.css";
import Rotas from "./rotas.js";
import { CartProvider } from './contexts/cart.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CartProvider>
  <Rotas />
</CartProvider>
);



