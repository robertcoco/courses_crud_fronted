import React, {Component} from 'react';
import Form from '../../Components/Form.jsx';


export default class Edit extends Component {

    render() {
        const title = "Edit";
        const metodo = "GET";
        const buttonName = 'Editar'
        return (
        <Form metodo = {metodo} title = {title} button = {buttonName}></Form>
        );
    }
}
