import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes
import Banner from './components/Banner/index';
import Header from './components/Header/index';
import Footer from './components/Footer/index';
import HomePage from './components/Cards/Cards.jsx'; // Assuming you have a HomePage component
import ApartmentPage from './components/ApartmentPage/index.jsx'; // Assuming you have an ApartmentPage component

const routes = [

  
  {
    path: '/',
    element: <HomePage /> // Render the component directly as the element
  },
  {
    path: '/apartment/:id',
    element: <ApartmentPage /> // Render the component directly as the element
  }
];

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Header />
      {/* Use Routes instead of Switch */}
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={route.element} // Use element instead of component
          />
        ))}
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
