 import React from 'react';
 import './App.css';
 import TodoList from './Todolist/Todolist';

 const TodoApp = () => {
  let dateobj = new Date();

  let days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

  let months = ["Jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"];

  let date = dateobj.getDate();

  let month = months[dateobj.getMonth()];

  let day = days[dateobj.getDay()];

  //console.log(dateobj.getMonth());
  //console.log(dateobj.getDay());
  return (
    <div className = "Todo-App">
      <h1>Today <span> { day }  { date } { month }</span></h1>
      <TodoList/>
    </div>
  );
 };
 export default TodoApp;