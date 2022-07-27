import React from 'react';
import Form from '../../Components/Form';
import { CreateData } from '../../functions/Request.js';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

function Create(props) {
    const title = "Create";
    const metodo = "POST";
    const buttonName = 'Crear'
    const showToastMessage = () => {
        toast.success(`Course ${props.toastMessage}`, {
            position: toast.POSITION.TOP_CENTER
        });
    };


    const onCreate = (state, setState) => {
        CreateData(state)
            .then((res)=> {
                setState({
                    title: '',
                    description: '',
                    teacher: '',
                    topic: '',
                    _id: ''
                })

                if(res.success) {
                    console.log("success")
                    showToastMessage();
                }else {
                    console.log("failure")
                }
            })
            .catch((err) => console.error(err))
    }

    return (
        <Form
            EditPage = {false} 
            metodo = {metodo} 
            title = {title} 
            button = {buttonName}
            onAction = {onCreate}
        />
    )
}

export default Create;
