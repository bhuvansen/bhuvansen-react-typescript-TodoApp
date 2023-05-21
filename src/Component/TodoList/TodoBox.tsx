import { type } from 'os'
import React, { useEffect, useRef } from 'react'
import {Todo} from"../../models"
import {AiFillEdit, AiFillDelete} from 'react-icons/ai'
import {MdDone} from 'react-icons/md'
import { useState } from "react";
import "./TodoList.css"

type Props = {
    todo: Todo,
    todos : Todo[],
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
 
}

const TodoBox = ({todo, todos, setTodos}:Props) => {

  const [edit, setEdit] = useState<Boolean>(false)
  const [editTodo, setEditTodo] = useState<string>(todo.task)

  const handleDone=(id:number)=>{
    setTodos(todos.map((item) => 
    item.id===id? {...item, isDone:!item.isDone}:item
    ))
  }

  const handleDelete=(id:number)=>{
    setTodos(todos.filter((item)=>item.id!==id))
  }

  const handleEdit=(e:React.FormEvent, id:number)=>{
    e.preventDefault()
    setTodos(todos.map((item)=>(
      item.id===id ? {...item, task: editTodo} : item
    )))
    setEdit(false)
  }

  const inputRef = useRef<HTMLInputElement>(null)


  useEffect(()=>{
    inputRef.current?.focus()
  },[edit])

  return (
    <form className="todoBox" onSubmit={(e)=>handleEdit(e, todo.id)}>
      {
        edit ? (
        <input 
        ref = {inputRef}
          value={editTodo} 
          onChange={(e)=>setEditTodo(e.target.value)}
          className='todoText-edit'  
        />
        ):(
            todo.isDone ? (
              <s className="todoText">{todo.task}</s>
            ) : (
              <span className="todoText">{todo.task}</span>
            )
          
        )
      }
      
      <div>
        <span className="icon" onClick={()=>{
          if(!edit && !todo.isDone){
            setEdit(!edit)
          }
        }}>
          <AiFillEdit/>
        </span>
        <span className="icon"  onClick={()=>handleDelete(todo.id)}>
          <AiFillDelete/>
        </span>
        <span className="icon" onClick={()=>handleDone(todo.id)}>
          <MdDone/>
        </span>
      </div>
    </form>
  )
}

export default TodoBox