import React from 'react';
import Form from '../../Components/Form';
import { EditData} from '../../functions/Request.js';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

function Edit({ courseID, course }) {
    const title = "Edit";
    const metodo = "POST";
    const buttonName = 'Edit'
    const Message = () => {
        toast.success(`Course edited`, {
            position: toast.POSITION.TOP_CENTER
        });
    };

    const OnEdit = (state, setState) => {
        EditData({...state, id: courseID})
            .then((res)=> {
                setState({
                    title: '',
                    description: '',
                    teacher: '',
                    topic: '',
                    _id: ''
                })
                Message();
                if(res.success) {
                    console.log("success")
                }else {
                    console.log("failure")
                }
            })
            .catch((err) => console.error(err))
    }

    return (
        <Form 
            course = {course}
            EditPage = {true}
            metodo = {metodo} 
            title = {title} 
            button = {buttonName}
            onAction = {OnEdit}
        />
    )
}    
export default Edit;