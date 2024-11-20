import { React } from "react";

export default function Square(props){
    return(
        <button className="rounded text-center p-4 border-white border-2 min-w-14 min-h-14" onClick={props.onClick}>{props.item}</button>
    );
}