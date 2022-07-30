import React from 'react';
import { DeleteCourse } from '../../functions/Request.js'
import { Link } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

function Card({ course, courseIDSetter }) {
    const showToastMessage = () => {
        toast.success(`Just the fields that are filled are sent.`, {
            position: toast.POSITION.TOP_CENTER
        });
    };

    return (
        <div key={course._id} className="card">
            <button onClick={
                ()=> {
                    DeleteCourse(course._id, {id: course._id});  
                }
            }
            id = "eliminar"></button>
            <Link to='/edit' id ="editar" >
                <button onClick={()=> {
                    courseIDSetter(course._id);
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
    )
}

export default Card;