import React , {useRef} from 'react'
import "./InputTodo.css"

interface Props{
    todo:string,
    setTodo:React.Dispatch<React.SetStateAction<string>>
    handleButton: (e:React.FormEvent)=>void
}

const InputTodo = ({todo, setTodo, handleButton}:Props) => {
    const inputRef = useRef<HTMLInputElement>(null)

  return (
    <form className="input" onSubmit={(e)=> {
        handleButton(e);
        inputRef.current?.blur();
        }} 
    >
        <input 
            ref = {inputRef}
            type="input" 
            placeholder='Enter a task' 
            className='inputTodo' 
            value={todo}    
            onChange={(e)=>setTodo(e.target.value)}
        />
        <button className='submitButton' type='submit'>Go</button>
    </form>
  )
}

export default InputTodo