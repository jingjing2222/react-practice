import React from "react";

export default function Book(props){
    return(
        <div>
            <h1>이 책의 이름은 {props.name}입니다.</h1>
            <h2>이 책의 페이지는 {props.page}입니다.</h2>
        </div>

    );
}