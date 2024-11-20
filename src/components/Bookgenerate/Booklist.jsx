import React from "react";

export default function Booklist(props){
    return(
        <div>
            이 책의 이름은 {props.name}입니다. 
            <br/>
            이 책의 페이지는 {props.page}입니다.
        </div>
    );
}