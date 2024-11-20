import React from "react";
import { useState } from "react";
import Booklist from "./Booklist";

export default function Bookgenerate(){
    const[inputName,setInputName]=useState("")
    const[inputPage,setInputPage]=useState("")
    const[bookList,setBookList]=useState([])

    const addBook =()=>{
        setBookList([...bookList,[inputName,inputPage]])
        console.log(inputName)
        console.log(bookList)
    }
    return(
        <>
            <input className="mr-0.5" type="text" value={inputName} onChange={(event)=>{setInputName(event.target.value)}}/>
            <input className="mr-0.5" type="text" value={inputPage} onChange={(event)=>{setInputPage(event.target.value)}}/>
            <button onClick={addBook}>추가</button>
            {bookList.map((item)=><Booklist name={item[0]} page={item[1]}/>)}
        </>
    );
}