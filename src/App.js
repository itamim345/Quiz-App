import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>
          {/* <Route path='/' element={} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
