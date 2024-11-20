import {useState,React} from "react";
import Square from "./Square";
import { History } from "./History";

export default function Tiktaktoe(){
    const[count,setCount]=useState(0);
    const[whoPlayer,setWhoPlayer]=useState('O')
    const[history,setHistory]=useState([])
    const[whoDo,setWhoDo]=useState([[1,''],[2,''], [3,''], [4,''], [5,''], [6,''], [7,''], [8,''], [9,'']])

    function clickButton(location){
        if(whoDo[location-1][1]==''){
            setCount(count+1);
            setHistory([...history,[location,whoPlayer]]);
            setWhoDo(prevWhoDo => 
                prevWhoDo.map((item, index) => index === location - 1 ? [item[0], whoPlayer] : item));
            console.log(history);
            if(whoPlayer=='O') setWhoPlayer('X');
            else setWhoPlayer('O');
            console.log(whoPlayer);
    }
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
                    <Square item={whoDo[0][1]} onClick={()=>clickButton(1)}/>
                    <Square item={whoDo[1][1]} onClick={()=>clickButton(2)}/>
                    <Square item={whoDo[2][1]} onClick={()=>clickButton(3)}/>
                </div>
                <div>
                    <Square item={whoDo[3][1]} onClick={()=>clickButton(4)}/>
                    <Square item={whoDo[4][1]} onClick={()=>clickButton(5)}/>
                    <Square item={whoDo[5][1]} onClick={()=>clickButton(6)}/>
                </div>
                <div>
                    <Square item={whoDo[6][1]} onClick={()=>clickButton(7)}/>
                    <Square item={whoDo[7][1]} onClick={()=>clickButton(8)}/>
                    <Square item={whoDo[8][1]} onClick={()=>clickButton(9)}/>
                </div>
            </div>
            {history.map((item)=><History location={item[0]} who={item[1]} count={count}/>)}
        </div>
    );
}