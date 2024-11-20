import { useState, React } from "react";

export function History(props){
    return(
        <div>#{props.count} {props.location}에 {props.who}가 놓았습니다.</div>
    );
}