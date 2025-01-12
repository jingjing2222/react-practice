import { useState } from 'react'

export default function GetTest2() {
    const [users, setUsers] = useState([])

    async function onClickHandler() {
        try {
            const result = await fetch('http://localhost:3001/api/users')
            if (!result.ok) throw new Error(result.statusText)
            setUsers(await result.json())
        } catch {
            console.log('에러에용~')
        }
    }
    return (
        <div>
            <div style={{ fontSize: 25 }}>GetTest2</div>
            <hr />
            <button onClick={onClickHandler}>눌러주세용</button>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{`${user.name}, ${user.email}`}</li>
                ))}
            </ul>
        </div>
    )
}
