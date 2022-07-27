import React, {Component, useEffect} from 'react';
import Form from '../../Components/Form';
import { EditData } from '../../functions/Request.js';

function Edit({ courseID }) {
    const title = "Editar";
    const metodo = "POST";
    const buttonName = 'Editar'

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
            metodo = {metodo} 
            title = {title} 
            button = {buttonName}
            onAction = {OnEdit}
        />
    )
}    
export default Edit;