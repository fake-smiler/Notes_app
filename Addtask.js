import React from 'react';
import './Addtask.css';
import { useState } from 'react';
const Addtask = (props) => {
    const[Input,setInput] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        props.submit({                       // Object pass pannirukean idha todolist la (todo) nu get panniupean
            text : Input,
            isComplete : false
        });
        setInput('');
    }

    const handleChange = (event) => {
        //console.log(event.target.value);
        setInput(event.target.value);   
    }
     
    return (    
        <center>
        <div className = "Add-Task">
            <form onSubmit = {handleSubmit}>
                <input type="text" placeholder = "Add Task e.g Conferrence Metting at 2PM" onChange = {handleChange} value={ Input }/>
                <input type="submit" value = " + "/>
                </form>
        </div>
        </center>
    );
};
export default Addtask;