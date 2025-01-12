import { useEffect, useState } from 'react'

export default function GetTest1() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch('http://localhost:3001/api/users')
            .then((response) => {
                if (!response.ok) throw new Error('네트워크에 문제가 있습니다!')
                return response.json()
            })
            .then((data) => {
                setUsers(data)
                setLoading(false)
            })
            .catch((error) => {
                setError(error.message)
                setLoading(false)
            })
    }, [])

    if (loading) return <div>로딩중...</div>
    if (error) return <div>에러: {error}</div>
    return (
        <div>
            <div style={{ fontSize: 25 }}>GetTest</div>
            <hr />
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{`${user.name}, ${user.email}`}</li>
                ))}
            </ul>
        </div>
    )
}
