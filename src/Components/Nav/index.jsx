import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";


export default class Nav extends Component {
    render() {
        return <nav className = "Nav">
            <ul className='Nav-ul'>
                <li className='ul-li'><Link className='li-a' to='/home'>Home</Link></li>
                <li className='ul-li'><Link className='li-a' to='/create'>Create</Link></li>
                <li className='ul-li'><Link  className='li-a' to='/edit'>Edit</Link></li>
            </ul>
        </nav>
    }
}