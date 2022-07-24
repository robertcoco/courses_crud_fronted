import React, {useEffect} from 'react';
import {GetAllData} from '../functions/Request.js';

// creating react component called Home 
// which is the actually the first page in being loaded.

 function Home(props) {
     useEffect(()=> {
         GetAllData();
     },[])

     const tasks = props.tasks;
     return (
            <div className='container-home' >
                {tasks.map(e => <div className="card" key={e.id}>
                    <div className="card-body">
                        <h4 className="card-title">Title</h4>
                        <p className="card-text">{e.description}</p>
                    </div>
                </div>)}
            <div/>
            </div>
        )
    }    
export default Home;