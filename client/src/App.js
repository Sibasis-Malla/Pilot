import React, { useContext, useEffect } from 'react';

// libraries
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// components
import HomePage from './pages/HomePage';
import Marginals from './components/marginals/Marginals';
import ProfilePage from './pages/ProfilePage';
import ArticlePage from './pages/ArticlePage';
import CreateArticle from './pages/CreateArticle';
import SignUp from './components/forms/SignUp';

// contexts
import Web3Context from './context';

// css
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const App = () => {
  const { checkIfWalletIsConnected } = useContext(Web3Context);
  window.ethereum &&
    window.ethereum.on('accountsChanged', function (accounts) {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refershToken');
      window.location.reload();
    });

  useEffect(() => {
    checkIfWalletIsConnected();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Router>
      <Marginals>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/:id/profile" element={<ProfilePage />} />
          <Route path="/:pubId/article" element={<ArticlePage />} />
          <Route path="/:id/article/create" element={<CreateArticle />} />
        </Routes>
      </Marginals>
    </Router>
  );
};

export default App;
