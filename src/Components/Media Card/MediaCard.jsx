import React from 'react';
import './MediaCard.css';
import Gate from '../Gate/Gate';

function MediaCard({title , body , imgUrl}){
    return(
        <div className="MediaCard">
            <h1>Media Card Component</h1>
            <h2>{title}</h2>
            <p>{body}</p>
            <img src={imgUrl} alt="img"/>
            <Gate isOpen={true}/>
        </div>
    );
}

export default MediaCard;