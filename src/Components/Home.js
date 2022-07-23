import React, {Component} from 'react';

export default class Home extends Component {
    render() {
        return (
            <div >
                {this.props.tasks.map(e => <div class="card" key={e.id}>
                    <div class="card-body">
                        <h4 class="card-title">Title</h4>
                        <p class="card-text">{e.description}</p>
                    </div>
                </div>)}
            <div/>
            </div>
        )
    }    
}