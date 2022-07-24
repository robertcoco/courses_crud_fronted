import React, {Component} from 'react';
import Form from '../../Components/Form.jsx';


export default class Create extends Component {

    render() {
        const title = "Create";
        return (
        <Form title = {title}></Form>
        );
    }
}