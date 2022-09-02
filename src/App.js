import {Routes, Route} from 'react-router-dom'
import About from './components/About';
import Help from './components/Help';
import Home from './components/Home';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/help' element={<Help/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
