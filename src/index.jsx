import React from 'react';

import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import About from './pages/About/';
import Error from './pages/Error';

import Footer from './components/Footer/index';
import HomePage from './pages/Home'; 
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
