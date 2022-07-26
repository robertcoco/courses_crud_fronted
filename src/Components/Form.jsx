import React, {Component} from 'react';
import logo from '../delicius.png';
import {CreateData} from '../functions/Request.js';
export default class form extends Component {

    constructor() {
        super();
        this.state = {
            title: '',
            description: '',
            teacher: '',
            topic: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.addTask = this.addTask.bind(this);
    }

    addTask(e) {
        CreateData(this.state);
        e.preventDefault();
    }

    async EditCourses (id, datos) {
        if(datos !== null) {
            await fetch("http://localhost:3000/api/course/edit", {
                method: "PUT",
                body: JSON.stringify(datos),
                headers: {
                    'Content-Type': 'application/json'     
                }
            }).then(res => res.json()).
            then(data => console.log(data)).
            catch(err => console.log(err));
        }
    }

    handleChange(e) {
        const {name, value} = e.target;
        this.setState({
            [name] : value
        });
    }

    render () {
        // totally innecessary and stupid
        const arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,12, 13];
        const propiedades = this.props;
        return (
            <div className='container'>
                <form  className='form'> 
                    <label className='Titulo'>
                        {propiedades.title} course
                        <br></br>
                        <input value={this.state.title} onChange={this.handleChange} required type = "text" placeholder='Nombre' className = "text" name='title'></input>
                    </label>
                    <textarea value={this.state.description} onChange={this.handleChange} required  placeholder='Descripcion' className = "text" name='description'></textarea>
                    <input value={this.state.teacher} onChange={this.handleChange} type = "text" placeholder='Profesor' className = "text" name='teacher'></input>
                    <input value={this.state.topic} onChange={this.handleChange} type = "text" placeholder='topic' className = "text" name='topic'></input>
                    <input onClick= {this.addTask || this.EditCourses} type = "submit" value= {propiedades.button} id = "button"></input>

                </form>
                <div>
                {arreglo.map((e) => 
                    <img className='image' key={e} src={logo} alt='carita feliz'></img>
                )}
                </div>
            </div>
        )
    }
}