import { React } from "react";

export default function Square(props){
    return(
        <button className="rounded p-4 text-center border-white border-2 min-w-14" onClick={props.onClick}>{props.item}</button>
    );
}