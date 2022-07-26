import React, {Component, useEffect} from 'react';
import Form from '../../Components/Form.jsx';

function Edit(props) {
        const title = "Editar";
        const metodo = "POST";
        const accion = "http://localhost:3000/api/course/create"
        const buttonName = 'Editar'
    return (
        <Form metodo = {metodo} title = {title} button = {buttonName}></Form>

       )
   }    
export default Edit;