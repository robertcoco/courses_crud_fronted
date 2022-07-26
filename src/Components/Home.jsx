import React, {useEffect, useState} from 'react';
import {GetData, DeleteCourse} from '../functions/Request.js'
// creating react component called Home 
// which is the actually the first page in being loaded.

 function Home(props) {
    const [courses, setCourses] = useState(null);
        useEffect(()=> {
            GetData(setCourses);
        },[]) 
    let datos = {};
    let id;
     return (
                <>{courses !== null ?(
                    <div className='container-home'>
                        {courses.map(course => <div key={course._id} className="card">
                        <button onClick={()=>  {DeleteCourse(course._id, datos = {
                            id: course._id
                        },
                        )
                        GetData(setCourses);
                                  
                        }}
                        id = "eliminar"></button>

                        <a href='/edit' id ="editar" >
                            <button  id = "buttonEdit">Editar</button>
                        </a>

                        <div className="card-body">
                            <h4 className="card-title">{course.title}</h4>
                            <p className="card-text">{course.description}</p>
                        </div>
                        </div>)}
                    </div>
                ):("adios")}
                </>
        )
    }    
export default Home;