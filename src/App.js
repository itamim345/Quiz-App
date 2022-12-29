import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './Pages/Home/Home';
import Quizes from './Pages/Quizes/Quizes';
import Score from './Pages/Score/Score';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/quizes' element={<Quizes/>} />
          <Route path='/score' element={<Score/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
