import { useState } from 'react'

function Work2() {
    const [level, setLevel] = useState(1)
    const [title, setTitle] = useState('Novice')

    return (
        <div>
            <div style={{ fontSize: 25 }}>실습2</div>
            <hr />
            <div style={{ marginBottom: 10 }}>{level}</div>
            <div style={{ marginBottom: 10 }}>{title}</div>
            <button
                onClick={() => {
                    setLevel((level) => {
                        const newLevel = level + 1
                        if (newLevel >= 15) setTitle('2차 전직')
                        else if (newLevel >= 10) setTitle('1차 전직')
                        return newLevel
                    })
                }}
            >
                레벨업
            </button>
        </div>
    )
}

export default Work2
