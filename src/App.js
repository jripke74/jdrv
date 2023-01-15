import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './components/layout/Layout';
import Main from './pages/Main';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import AuthPage from './pages/AuthPage';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path='/services' element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/admin' element={<AuthPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
