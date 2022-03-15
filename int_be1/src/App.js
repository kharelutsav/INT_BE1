import './App.css';
import Homepage from './components/Homepage';
import {Routes, Route} from 'react-router-dom';
import Buy from './components/Buy';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/buy' element={<Buy />}/>
      </Routes>
    </div>
  );
}

export default App;
