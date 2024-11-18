import React from "react";
import Book from "./Book";

export default function Library(){
    return(
        <div className="text-white">
            <Book name="채식 주의자" page={300} />
            <Book name="소년이 온다" page={400} />
            <Book name="작별하지 않는다" page={500} />
        </div>
    );
}