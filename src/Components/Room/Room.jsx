import react from 'react';
import './Room.css';

function Room(){

    let [light , setLight ] = react.useState(false);
    let [temp , setTemp] = react.useState(72);

    return (
        <div className={`Room ${light ? 'light' : 'dark'}`}>
            <h1>This Room is {light ? 'Lighted' : 'Darked'}</h1>
            <button onClick={()=>{
                if(light === false){
                    setLight(true);
                }
            }}>Light On</button>
            <button onClick={()=>{
                if(light === true){
                    setLight(false);
                }
            }}>Light Off</button>
            <br/>
            <h1>Room temprature is {temp}</h1>
            <button onClick={()=> setTemp(++temp)}>Increase Temp</button>
            <button onClick ={()=> setTemp(--temp)}>Decrease Temp</button>
        </div>
    );
}

export default Room;