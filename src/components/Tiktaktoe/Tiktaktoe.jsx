import {useState,React} from "react";
import Square from "./Square";

export default function Tiktaktoe(){
    const[whoPlayer,setWhoPlayer]=useState('O')
    const[history,setHistory]=useState([])

    function clickButton(location){
        setHistory([...history,[location,whoPlayer]]);
        console.log(history);
        if(whoPlayer=='O') setWhoPlayer('X');
        else setWhoPlayer('O');
        console.log(whoPlayer);
    }
    function displaySquare(location){
    }

    return(
        <div>
        <div>
            Board
        </div>
            <div>
                <div>
                    <Square item={whoPlayer} onClick={()=>clickButton(1)}/>
                    <Square item={whoPlayer} onClick={()=>clickButton(2)}/>
                    <Square item={whoPlayer} onClick={()=>clickButton(3)}/>
                </div>
                <div>
                    <Square item={whoPlayer} onClick={()=>clickButton(4)}/>
                    <Square item={whoPlayer} onClick={()=>clickButton(5)}/>
                    <Square item={whoPlayer} onClick={()=>clickButton(6)}/>
                </div>
                <div>
                    <Square item={whoPlayer} onClick={()=>clickButton(7)}/>
                    <Square item={whoPlayer} onClick={()=>clickButton(8)}/>
                    <Square item={whoPlayer} onClick={()=>clickButton(9)}/>
                </div>
            </div>
            {history.map((item)=><History location={item[0]} who={item[1]}/>)}
        </div>
    );
}