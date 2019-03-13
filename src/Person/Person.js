import React from 'react'

const person = (props)=>{
    return (
        <div>
            {/* <button onClick={props.click}>click from Person</button> */}
 <p>Hello I am  {props.name} and I am {props.age} year old!</p>
    <p>{props.children}</p>
    <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
}

export default person;