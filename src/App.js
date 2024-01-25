import './App.css';
import Home from './components/Home';
import Chatai from './components/Chatai';
import ImageGenerator from './components/ImageGenerator';
import Texttospeech from './components/Texttospeech';
import { Route, Routes } from 'react-router-dom';
import Breadcrumb from './layout/Breadcrumb';
function App() {
  return (
    <div className="App">
      <Breadcrumb  />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='ImageGenerator' element={<ImageGenerator />} />
        <Route path='Chatgpt' element={<Chatai />} />
        <Route path='Texttospeech' element={<Texttospeech />} />
      </Routes>
    </div>
  );
}

export default App;
