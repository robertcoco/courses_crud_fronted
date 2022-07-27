import React, { useEffect, useState } from 'react';
import { GetData, DeleteCourse } from '../../functions/Request.js'
import { Link } from "react-router-dom";
// creating react component called Home 
// which is the actually the first page in being loaded.

/**
 * TODO: Rellenar la información de los cursos en los cards.
 */

function Home({courseIDSetter}) {
    const [courses, setCourses] = useState(null);

    useEffect(()=> {
        console.log("okay")
        const getCourses = async () => setCourses(await GetData())
        getCourses()
    }, [])

    return (
            <>
            {courses !== null 
            ? (
                <div className='container-home'>
                    {courses.map(course => <div key={course._id} className="card">
                        <button onClick={
                            ()=> {
                                DeleteCourse(course._id, {id: course._id})
                                GetData(setCourses);
                            }
                        }
                        id = "eliminar"></button>
                        <Link to='/edit' id ="editar" >
                            <button onClick={()=> courseIDSetter(course._id)} id = "buttonEdit">Editar</button>
                        </Link>

                        <div className="card-body">
                            <h4 className="card-title">{course.title}</h4>
                            <p className="card-text">{course.description}</p>
                        </div>
                        </div>
                    )}
                </div>
            )
            :(
                <h4>Error</h4>
            )}
            </>
    
    )
}

export default Home;
