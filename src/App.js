import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './Pages/Home/Home';
import Quizes from './Pages/Quizes/Quizes';
import Score from './Pages/Score/Score';
import { useState } from 'react';

function App() {
  const [name, setName] = useState("");
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState();
  const getQuestions = () => {
    
  }
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>
          <Route path='/' element={<Home name={name} setName={setName} getQuestions={getQuestions} />} />
          <Route path='/quiz' element={<Quizes/>} />
          <Route path='/score' element={<Score/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
