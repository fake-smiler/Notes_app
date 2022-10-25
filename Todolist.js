import React from 'react';
import Addtask from '../Addtask/Addtask';
import {useState} from 'react';
import Todos from '../Todo/Todo';
const TodoList = () => {
  const[Todo,setTodo] = useState([]);  //Todo variable and Todo variable update pandrarthukuaga setTodo current value Array element andha array elemnt a setTodo function la update pandrean adhavadhu object a kuduthuruvean
  const Addtodo = (todo) => {   
        if(!todo.text) {   
      return;
    }
    const newtodo = [...Todo,todo]; // Spread Operator Todo la irrukura element + todo la irruka object um newtodo la store pannikurean
    //console.log(newtodo);
    setTodo(newtodo);
  }
  const IsComplete = (index) => {
    const UpdateList = [...Todo];
    UpdateList[index].IsComplete =
    !UpdateList[index].IsComplete;
    //console.log(UpdateList);
    setTodo(UpdateList);
  }
  const remove = (index) => {
    const filterarr = [...Todo];
    filterarr.splice(index,1);       // I dont understatnd this line
    setTodo(filterarr);
  }
  const Edit = (index,newval) => {
    if(!newval) {
      return;
    }
    const updateList = [...Todo];
    updateList[index].text = newval;
    setTodo(updateList);
  }
  return ( 
     <div className = "Todo-Lists">
       <Addtask submit = { Addtodo }/>
       <Todos todo = {Todo} IsComplete = {IsComplete} remove = {remove} Edit = {Edit}/>
      </div>
  );
  };
export default TodoList;