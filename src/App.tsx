import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import VideoDetail from './pages/VideoDetail/VideoDetail';
import VideoListPage from './pages/VideoListPage/VideoListPage';
import Login from './components/Login/Login';
import Header from './components/Header/Header';


const App: React.FC = () => {
  const isAuthenticated = localStorage.getItem('authenticated') === 'true';

  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          {isAuthenticated ? (
            <Routes>
              <Route path="/video/:id" element={<VideoDetail/>} />
              <Route path="/" element={<VideoListPage/>} />
            </Routes>
          ) : (
            <Login />
          )}
        </main>
      </div>
    </Router>
  );
}

export default App;
