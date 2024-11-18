import React from "react";
import { useState } from "react";
import Booklist from "./Booklist";

export default function Bookgenerate(){

    const[inputValue,setInputValue]=useState('')
    const[bookList,setBookList]=useState([])
    const addBook =()=>{
        setBookList([...bookList,inputValue])
    }
    return(
        <>
            <input type="text" value={inputValue} onChange={(event)=>{setInputValue(event.target.value)}}/>
            <button onClick={addBook}>추가</button>
            {bookList.map((name)=><Booklist name={name}/>)}
        </>
    );
}