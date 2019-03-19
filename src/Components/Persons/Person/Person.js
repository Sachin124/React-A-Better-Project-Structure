import React from 'react'

const person = (props)=>{
    return (
        <div>
            {/* <button onClick={props.click}>click from Person</button> */}
 <p>Hello I am  {props.name} and I am {props.age} year old! <span><button className="but" onClick={props.delete}>X</button></span> </p>
    <p>{props.children}</p>
    <input type="text" onChange={props.changed} value={props.name}/>
    <p className="border-hr"></p>
        </div>
    )
}

export default person;