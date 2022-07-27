import React from 'react';
import logo from '../../delicius.png';

function Form(props) {

    const [state, setState] = React.useState({
        title: '',
        description: '',
        teacher: '',
        topic: '',
        _id: ''
    })


    // React.useEffect()

    const addTask = (e) => {
        props.onAction(state, setState);
        e.preventDefault();
    }
    
    const handleChange = (e) => {
        const {name, value} = e.target;
        setState({
            ...state,
            [name] : value
        });
    }


    const arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,12, 13];

    return (
            <div className='container'>
            <form  className='form'> 
                <label className='Titulo'>
                    {props.title} course
                    <br></br>
                    <input value={state.title} onChange={handleChange} required type = "text" placeholder='Nombre' className = "text" name='title'></input>
                </label>
                <textarea value={state.description} onChange={handleChange} required  placeholder='Descripcion' className = "text" name='description'></textarea>
                <input value={state.teacher} onChange={handleChange} type = "text" placeholder='Profesor' className = "text" name='teacher'></input>
                <input value={state.topic} onChange={handleChange} type = "text" placeholder='topic' className = "text" name='topic'></input>
                <input onClick= {addTask} type = "submit" value= {props.button} id = "button"></input>
            </form>
            <div>
                {arreglo.map((e) => 
                    <img className='image' key={e} src={logo} alt='carita feliz'></img>
                )}
            </div>
        </div>
        )
}

export default Form;
