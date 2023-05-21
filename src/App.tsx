import React from 'react';
import './App.css';
import InputTodo from './Component/InputTodo/InputTodo';
import { useState } from "react";
import {Todo} from"./models"
import TodoList from './Component/TodoList/TodoList';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([])

  const onClickButton =(e: React.FormEvent)=>{
    e.preventDefault()

    if(todo){
      setTodos([...todos, {id:Date.now(), task: todo, isDone:false }])
      setTodo("")
    }
  }

  return (
    <div className="App">
      <span className='heading'>Todo App</span>
      <InputTodo setTodo = {setTodo} todo={todo} handleButton ={onClickButton}/>
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
