import React, {Component} from 'react';
import logo from '../delicius.png'

export default class form extends Component {
    render () {

        // totally innecessary and stupid
        const arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,12, 13];
        return (
            <div className='container'>
                <form className='form' method={this.props.metodo}> 
                    <label className='Titulo'>
                        {this.props.title} course
                        <br></br>
                        <input type = "text" placeholder='Nombre' id = "text"></input>
                    </label>
                    <input type = "submit" value="Crear" id = "button"></input>
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