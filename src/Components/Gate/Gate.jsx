import React from 'react';
import './Gate.css';

function Gate(props){
    return(
        <div className="Gate">
            <h1>{props.isOpen ? 'Gate is Open' : 'Gate is Closed'}</h1>
            <p>This h1 tag is render through Condional rendering procedure</p>
        </div>
    );
}

export default Gate;