import logo from './logo.svg';
import ggButton from './components/ggButton';
import './App.css';
import News from './pages/news';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import GGButton from './components/ggButton';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
       <GGButton></GGButton>
        <News></News>
      </header>
    </div>
  );
}

export default App;
