import {useState} from "react";
import React from "react";
import Todoitem from "./Todoitem";

export default function Todolist(){

    const [inputValue,setInputValue]=useState('')
    const [todoList,setTodoList]=useState([])
    const addItem = () =>{
        setTodoList([...todoList,inputValue])
        console.log(todoList)
    }

    return(
            <div className='my-6'>
                <h1>Todolist</h1>
                <input value={inputValue} type="text" onChange={(event)=>{setInputValue(event.target.value)}}/>
                <button onClick={addItem}className='text-white bg-black rounded border-2'>추가</button>
                {todoList.map((item)=><Todoitem item={item}/>)}
            </div>
    );
}