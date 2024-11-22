import {React,state,useState} from "react";
import Buttontocomponents from "./Buttontocomponents";
import Helloworld from "./Helloworld";
import Library from "./Bookgenerate/Library";
import Todolist from "./Todolist";
import Bookgenerate from "./Bookgenerate/Bookgenerate";
import Tiktaktoe from "./Tiktaktoe/Tiktaktoe"
import Weather from "./Weather/Weather";

export default function Displaycomponents(props){
    const[state,setState]=useState();

    function handlekick(componentName){
        switch (componentName) {
            case "Helloworld":
                setState(<Helloworld />);
                break;
            case "Library":
                setState(<Library />);
                break;
            case "Todolist":
                setState(<Todolist />);
                break;
            case "Bookgenerate":
                setState(<Bookgenerate />);
                break;
            case "Tiktaktoe":
                setState(<Tiktaktoe />);
                break;
            case "Weather":
                setState(<Weather />);
                break;    
            default:
                setState(null);
    }
}

    return(
        <div>
            <div>
                <Buttontocomponents name='Helloworld' onClick={()=>{handlekick('Helloworld')}}/>
                <Buttontocomponents name='Library' onClick={()=>{handlekick('Library')}}/>
                <Buttontocomponents name='Todolist' onClick={()=>{handlekick('Todolist')}}/>
                <Buttontocomponents name='Bookgenerate' onClick={()=>{handlekick('Bookgenerate')}}/>
                <Buttontocomponents name='Tiktaktoe' onClick={()=>{handlekick('Tiktaktoe')}}/>
            </div>
            <div>
                <Buttontocomponents name='Weather' onClick={()=>{handlekick('Weather')}}/>
            </div>
            <div>
                {state}
            </div>
        </div>
    );    
}