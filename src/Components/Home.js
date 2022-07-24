import React, {Component} from 'react';
import { gsap } from "gsap";
import {useRef, useEffect} from 'react';
// creating react component called Home 
// which is the actually the first page in being loaded.

export default class Home extends Component {
    render() {
        return (
            <div className='container-home' >
                {this.props.tasks.map(e => <div className="card" key={e.id}>
                    <div className="card-body">
                        <h4 className="card-title">Title</h4>
                        <p className="card-text">{e.description}</p>
                    </div>
                </div>)}
            <div/>
            </div>
        )
    }    
}