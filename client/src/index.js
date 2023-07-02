import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStore from './store/UserStore';
import CategoryStore from './store/CategoryStore';
import SellerStore from './store/sellerStore';
import ItemStore from './store/ItemStore';
import './index.css';

const userStore = new UserStore();
const categoryStore = new CategoryStore();
const sellerStore = new SellerStore();
const itemStore = new ItemStore();

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value = {{userStore, categoryStore, sellerStore, itemStore}}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
  </Context.Provider>
);

