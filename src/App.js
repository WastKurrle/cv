import {
  Route,
  Routes,
  Link,
  BrowserRouter as Router
} from 'react-router-dom'
import Home from './components/Home.jsx';
import Aboutme from './components/Aboutme.jsx';
import Projects from './components/Projects.jsx';

function App() {
  return (
    <Router>
      <div>
        <div className="flex justify-around p-3 bg-gray-900 text-gray-300 font-semibold">
          <Link to='/'>Home</Link>
          <Link to='/about-me'>Über mich</Link>
          <Link to='/projects'>Projekte</Link>
        </div>

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
