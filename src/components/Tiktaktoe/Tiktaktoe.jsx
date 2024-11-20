import {useState,React} from "react";
import Square from "./Square";
import { History } from "./History";
import Whowin from "./Whowin";

export default function Tiktaktoe(){
    const[count,setCount]=useState(1);
    const[whoPlayer,setWhoPlayer]=useState('O')
    const[history,setHistory]=useState([])
    const[whoDo,setWhoDo]=useState([[''],[''],[''],[''],[''],[''],[''],[''],['']])
    const[whoWin,setWhoWin]=useState(null);

    function clickButton(location){
        if(whoDo[location-1]=='' && whoWin==null){
            setCount((count)=> count+1);
            setHistory([...history,[location,whoPlayer,count]]);
            // 업데이트된 배열을 새로 만들어 사용
            const updatedWhoDo = whoDo.map((item, index) =>
                index === location - 1 ? whoPlayer : item
            );

            setWhoDo(updatedWhoDo);
            setWhoWin(checkWinner(updatedWhoDo)); // 업데이트된 배열로 승리 체크

            // 플레이어 변경
            setWhoPlayer(whoPlayer === 'O' ? 'X' : 'O');
    }

    function checkWinner(whoDo) {
        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
    
        for (let combination of winningCombinations) {
            const [a, b, c] = combination;
            if (whoDo[a] && whoDo[a] === whoDo[b] && whoDo[a] === whoDo[c]) {
                return whoDo[a];
            }
        }
    
        return null;
    }
}

    return(
        <div>
        <div>
            Board
        </div>
            <div>
                <div>
                    <Square item={whoDo[0]} onClick={()=>clickButton(1)}/>
                    <Square item={whoDo[1]} onClick={()=>clickButton(2)}/>
                    <Square item={whoDo[2]} onClick={()=>clickButton(3)}/>
                </div>
                <div>
                    <Square item={whoDo[3]} onClick={()=>clickButton(4)}/>
                    <Square item={whoDo[4]} onClick={()=>clickButton(5)}/>
                    <Square item={whoDo[5]} onClick={()=>clickButton(6)}/>
                </div>
                <div>
                    <Square item={whoDo[6]} onClick={()=>clickButton(7)}/>
                    <Square item={whoDo[7]} onClick={()=>clickButton(8)}/>
                    <Square item={whoDo[8]} onClick={()=>clickButton(9)}/>
                </div>
            </div>
            {whoWin !== null ? <Whowin whowin={whoWin}/> : history.map((item)=> <History location={item[0]} who={item[1]} count={item[2]}/>)}
        </div>
    );
}