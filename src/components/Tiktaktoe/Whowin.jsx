import { useState, React } from "react";

export default function Whowin(props){
    return(
        <div>
            승자는 {props.whowin}입니다!
        </div>
    )
}