import React, {Component, useEffect} from 'react';
import Form from '../../Components/Form.jsx';
import {CreateData} from '../../functions/Request.js';

function Create(props) {
        const title = "Create";
        const metodo = "POST";
        const accion = "http://localhost:3000/api/course/create"
        const buttonName = 'Crear'
    return (
        <Form metodo = {metodo} title = {title} accion = {accion} button = {buttonName}></Form>

       )
   }    
export default Create;