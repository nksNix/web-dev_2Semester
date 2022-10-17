import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import './reset.min.css'
import reportWebVitals from './reportWebVitals';
import GlobalFonts from './Components/GlobalFonts/GlobalFonts.js'
import Header from './Components/Header/Header.js'
import Products from './Components/Products/Products.js'
import Orders from './Components/Orders/Orders.js';
import Description from './Components/Description/Description';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalFonts />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header />}>
          <Route index element={<Products />} />
          <Route path='/orders' element={<Orders />}>
            <Route path=':id' element={<Orders />} />
          </Route>
          <Route path='/product/:id' element={<Description />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
