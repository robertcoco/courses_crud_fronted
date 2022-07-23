import React, {Component} from 'react';


export default class Nav extends Component {
    render() {
        return <nav className = "Nav">
            <ul className='Nav-ul'>
                <li className='ul-li'><a  className='li-a' href='/home'>Home</a></li>
                <li className='ul-li'><a className='li-a' href='/create'>Create</a></li>
                <li className='ul-li'><a  className='li-a' href='/edit'>Edit</a></li>
            </ul>
        </nav>
    }
}