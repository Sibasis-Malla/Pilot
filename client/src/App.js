import React, { useContext, useEffect } from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Marginals from './components/marginals/Marginals';
import ProfilePage from './pages/ProfilePage';
import ArticlePage from './pages/ArticlePage';
import CreateArticle from './pages/CreateArticle';
import Web3Context from './context';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Checkout from './components/forms/Checkout';

function App() {
  const { checkIfWalletIsConnected } = useContext(Web3Context);
  window.ethereum &&
    window.ethereum.on('accountsChanged', function (accounts) {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refershToken');
      window.location.reload();
    });

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return (
    <Router>
      <Marginals>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<Checkout />} />
          <Route path="/:id/profile" element={<ProfilePage />} />
          <Route path="/article" element={<ArticlePage />} />
          <Route path="/:id/article/create" element={<CreateArticle />} />
        </Routes>
      </Marginals>
    </Router>
  );
}

export default App;
