import './App.css';
import React from 'react';
import Create from '../../Pages/Create/index.js';
import Edit from '../../Pages/Edit/index.js';
import useAnimation from '../../Hooks/useAnimation';
import Nav from '../Nav';
import Footer from "../Footer"
import Home from '../../Pages/Home';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer} from 'react-toastify';


import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  const [courseID, setCourseID] = React.useState('');
  const [course, setCourse] = React.useState('');
  const animationRef = useAnimation();

  return (
    <Router>
      <Nav/>
      <Routes>
        <Route path='/create' element= {<Create toastMessage = 'created'/>}/>
        <Route path='/edit' element= {<Edit toastMessage= 'edited' courseID = {courseID} course = {course} />}/>
        <Route path='/home' element= {<Home courseIDSetter = {setCourseID} setCourse = {setCourse}/>}/>
        <Route path='/' element= {<Home/>}/>
      </Routes>
      <ToastContainer/>
      <Footer reference={animationRef}/>
    </Router>
  );
}

export default App;
