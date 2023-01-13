import {
  Route,
  Routes,
  BrowserRouter as Router
} from 'react-router-dom'

// components
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import Aboutme from './components/Aboutme.jsx';
import Projects from './components/Projects.jsx';
import SchoolManger from './components/SchoolManger.jsx';
import WorkTogether from './components/WorkTogehter.jsx';

function App() {
  return (
    <div className='bg-gray-800 h-screen'>
      <Router>
        <div>
          <Navbar />

          <div className='max-w-7xl m-auto mt-3'>
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/about-me' element={<Aboutme />}/>
              <Route path='/projects' element={<Projects />}/>
              <Route path='/projects/schoolmanager' element={<SchoolManger />}/>
              <Route path='/projects/work-together' element={<WorkTogether />}/>
            </Routes>
          </div>
        </div> 
      </Router>
    </div>
  )
}

export default App;
