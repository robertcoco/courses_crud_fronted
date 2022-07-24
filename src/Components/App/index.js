import './App.css';
import Create from '../../Pages/Create/index.jsx';
import Edit from '../../Pages/Edit/index.jsx';
import { gsap } from "gsap";
import Nav from '../Nav.js';
import Home from '../Home.js';
import Courses from '../Courses.json';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const div = document.getElementsByClassName(".container");
  gsap.to(div, { duration: 1.5, ease: "", y: -70 });
  return (
    <Router>
      <Nav></Nav>
      <Routes>
        <Route path='/create' element= {<Create></Create>}/>
        <Route path='/edit' element= {<Edit></Edit>}/>
        <Route path='/home' element= {<Home tasks = {Courses}></Home>}/>
        <Route path='/' element= {<Home tasks = {Courses}></Home>}/>
      </Routes>
      <footer className='footer'>
        <nav className='Nav-footer'>
          <ul>
            <li className='li-footer'><a href='https://www.facebook.com/profile.php?id=100079409168602'><svg fill="#fff" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 64 64" width="64px" height="64px"><path d="M48,7H16c-4.418,0-8,3.582-8,8v32c0,4.418,3.582,8,8,8h17V38h-6v-7h6v-5c0-7,4-11,10-11c3.133,0,5,1,5,1v6h-4 c-2.86,0-4,2.093-4,4v5h7l-1,7h-6v17h8c4.418,0,8-3.582,8-8V15C56,10.582,52.418,7,48,7z"/></svg></a></li>
            <li  className='li-footer'></li>
          </ul>
        </nav>
      </footer>
    </Router>
  );
}

export default App;
