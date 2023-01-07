import {
  Route,
  Routes,
  BrowserRouter as Router
} from 'react-router-dom'

import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import Aboutme from './components/Aboutme.jsx';
import Projects from './components/Projects.jsx';

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <div className='max-w-7xl m-auto mt-3'>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/about-me' element={<Aboutme />}/>
            <Route path='/projects' element={<Projects />}/>
          </Routes>
        </div>
      </div> 
    </Router>
  )
}

export default App;
