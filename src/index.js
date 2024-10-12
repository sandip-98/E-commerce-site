import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menswear from './Menswear';
import Womenwear from './Womenwear';
import About from './About';
import Cart from './components/Cart';
import { Provider } from 'react-redux';
import { store } from './app/Store';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}> 
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Menswear" element={<Menswear />} />
          <Route path="/Womenwear" element={<Womenwear />} />
          <Route path="/About" element={<About />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
      </Provider>
  </React.StrictMode>
);

reportWebVitals();
