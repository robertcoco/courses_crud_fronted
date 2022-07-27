import React, { useEffect, useState } from 'react';
import { GetData, DeleteCourse } from '../../functions/Request.js'
import { Link } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

function Card(props) {
    const [courses, setCourses] = useState(null);

    useEffect(()=> {
        console.log("okay")
        const getCourses = async () => setCourses(await GetData())
        getCourses();
    }, [])

    const showToastMessage = () => {
        toast.success(`Just the fields that are filled are sent.`, {
            position: toast.POSITION.TOP_CENTER
        });
    };

    return (
            <>
            {courses !== null 
            ? (
                <div className='container-home'>
                    {courses.map(course => <div key={course._id} className="card">
                        <button onClick={
                            ()=> {
                                DeleteCourse(course._id, {id: course._id});  
                                const getCourses = async () => setCourses(await GetData())
                                getCourses();                
                            }
                        }
                        id = "eliminar"></button>
                        <Link to='/edit' id ="editar" >
                            <button onClick={()=> {
                                props.setCourse(course);
                                props.courseIDSetter(course._id);
                                showToastMessage();
                                }} id = "buttonEdit">Editar</button>
                        </Link>

                        <div className="card-body">
                            <h4 className="card-title">
                                <b className='negrita'>Curso</b>
                                <br/>
                                {course.title}
                            </h4>
                            <p className="card-text">
                                <b className='negrita'>description</b>
                                <br/>
                                {course.description}
                            </p>
                            <p className="card-text">{course.teacher}</p>
                            <p className="card-text">{course.topic}</p>
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

export default Card;