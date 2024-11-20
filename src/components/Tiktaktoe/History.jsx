import { useState, React } from "react";

export function history(props){
    return(
        <div>{props.location}에 {props.who}가 놓았습니다.</div>
    );
}