import React from 'react';
const am =(props)=>{
    return(
        <div className="Person">
            <p onClick={props.delete}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} value={props.name} />
        </div>
    )
}
export default am;