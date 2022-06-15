import React, { useContext,useEffect } from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Marginals from './components/marginals/Marginals';
import SignUp from './components/forms/SignUp';
import ProfilePage from './pages/ProfilePage';
import ArticlePage from './pages/ArticlePage';
import CreateArticle from './pages/CreateArticle';
import Web3Context from './context';

function App() {
  const {checkIfWalletIsConnected,account} = useContext(Web3Context);
  window.ethereum&&window.ethereum.on('accountsChanged', function (accounts) {
   window.location.reload()
  });
 
  useEffect(() => {
    checkIfWalletIsConnected();

  }, []);
   

  return (
    <Router>
      <Marginals>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/article" element={<ArticlePage />} />
          <Route path="/article/create" element={<CreateArticle />} />
        </Routes>
      </Marginals>
    </Router>
  );
}

export default App;