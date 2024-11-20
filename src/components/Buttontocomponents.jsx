import React from "react";

export default function Buttontocomponents(props){
    return(
        <button className="rounded text-center m-4 p-4 border-white border-2 min-w-14 min-h-14" onClick={props.onClick}>{props.name}</button>
    );
}