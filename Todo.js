import React from 'react';
import {useState} from 'react';
import './Todo.css';
import Popup from './Popup/Popup';
const Todos = (props) => {       // hr tag edhukuna line vandurukum output la..
    const [edit,setEdit] = useState({
        index:null,
        text:'',

    });
    const update = (val) => {
        props.Edit(edit.index,val);
        setEdit({
            index:null,
            text:'',
        });
    }
    const arr = [1,2,3,4,5,6];   //Ellam Element kum unique a key provide pannanum so arr use pannirukean
    const handleClick = () => {
        return;
    }
    const TodoList = props.todo.map((currentele,index) => {
        return <div key = {index}>   
            <li key = {arr[0] ++ }>
                <span key = {arr[3] ++ } onClick = {currentele.IsComplete ? () => props.remove(index) : {handleClick}} className = {currentele.IsComplete ? 'cross' : 'do'}>
                    {
                        currentele.IsComplete ? 'X' : '->'
                    }
                </span>
                <span key = {arr[1] ++} className = {currentele.IsComplete ? 'completetask' : 'duetask'} onClick = {() => props.IsComplete(index)}> {currentele.text}</span>
                <button className = "Edit" onClick = {() => setEdit({
                    index:index,
                    text:currentele.text
                })} disabled = {
                    currentele.IsComplete ? true : false
                }>EDIT &#10000;</button>
                <hr key = {arr[2] ++} />  
            </li>
        </div>
    });
    return (
        <div>
            <center>
                <div className = "Todo">
                    <ol className = "ol">
                        <h1>{TodoList}</h1>
                        </ol> 
                </div>
            </center>
            {
                edit.text ? (
                    <Popup edit = {edit} update = {update}/>
                ) : null
            }
        </div>
        
    );
};
export default Todos;