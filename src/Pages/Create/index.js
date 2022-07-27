import React from 'react';
import Form from '../../Components/Form';
import { CreateData } from '../../functions/Request.js';


function Create(props) {
    const title = "Create";
    const metodo = "POST";
    const buttonName = 'Crear'

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
            onAction = {onCreate}
        />
    )
}

export default Create;
