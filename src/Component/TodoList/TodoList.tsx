import React from "react"
import "./TodoList.css"
import { Todo } from "../../models"
import TodoBox from "./TodoBox"

interface Props {
  todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div className="todos">
      {todos.map((item) => (
        <TodoBox todo={item} key={item.id} todos={todos} setTodos={setTodos} />
      ))}
    </div>
  )
}

export default TodoList
