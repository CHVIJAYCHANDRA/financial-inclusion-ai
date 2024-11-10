import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Dashboard } from './pages/Dashboard';
import { Goals } from './pages/Goals';
import { Learn } from './pages/Learn';
import { Banking } from './pages/Banking';
import { Calculator } from './pages/Calculator';
import { LanguageProvider } from './components/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/goals" element={<Goals />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/banking" element={<Banking />} />
            <Route path="/calculator" element={<Calculator />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;