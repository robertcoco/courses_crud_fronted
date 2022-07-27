import './App.css';
import React from 'react';
import Create from '../../Pages/Create/index.js';
import Edit from '../../Pages/Edit/index.js';
import useAnimation from '../../Hooks/useAnimation';
import Nav from '../Nav';
import Footer from "../Footer"
import Home from '../../Pages/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [courseID, setCourseID] = React.useState('')
  const animationRef = useAnimation()

  return (
    <Router>
      <Nav/>
      <Routes>
        <Route path='/create' element= {<Create/>}/>
        <Route path='/edit' element= {<Edit courseID = {courseID} />}/>
        <Route path='/home' element= {<Home courseIDSetter = {setCourseID}/>}/>
        <Route path='/' element= {<Home/>}/>
      </Routes>
      <Footer reference={animationRef}/>
    </Router>
  );
}

export default App;
