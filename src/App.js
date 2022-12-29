import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './Pages/Home/Home';
import Quizes from './Pages/Quizes/Quizes';
import Score from './Pages/Score/Score';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [name, setName] = useState("");
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);
  const getQuestions = async (category="", difficulty="") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    )
    setQuestions(data.results)
  };
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>
          <Route path='/' element={<Home name={name} setName={setName} getQuestions={getQuestions} />} />
          <Route path='/quiz' element={<Quizes name={name} questions={questions} score={score} setScore={setScore}/>} />
          <Route path='/score' element={<Score/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
