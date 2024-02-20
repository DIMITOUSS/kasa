import React from 'react';

import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes
import About from './pages/About/';
import Error from './pages/Error';

import Header from './components/Header/index';
import Footer from './components/Footer/index';
import HomePage from './components/Cards/Cards.jsx'; 
import ApartmentPage from './components/ApartmentPage/index.jsx'; 

const routes = [

  
  {
    path: '/',
    element: <HomePage /> 
  },
   
  {
    path: '*',
    element: <Error /> 
  },
  {
    path: '/about',
    element: <About />
  },{
    path: '/apartment/:id',
    element: <ApartmentPage />
  },
  
];

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Header />
   
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={route.element} 
          />
        ))}
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
