import { useState } from 'react'

function AddButton({ setCount }) {
    return <button onClick={() => setCount((previousCount) => previousCount + 1)}>증가</button>
}

function MinusButton({ setCount }) {
    return <button onClick={() => setCount((previousCount) => previousCount - 1)}>감소</button>
}

function OneButton({ setCount, children }) {
    return <button onClick={setCount}>{children}</button>
}

export default function Work4() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div style={{ fontSize: 25 }}>실습4</div>
            <hr />
            <div style={{ marginBottom: 10 }}>{count}</div>
            <AddButton setCount={setCount} />
            <MinusButton setCount={setCount} />

            <hr />

            <OneButton setCount={() => setCount((previousCount) => previousCount + 1)}>
                증가
            </OneButton>
            <OneButton setCount={() => setCount((previousCount) => previousCount - 1)}>
                감소
            </OneButton>
            <div style={{ display: 'flex', flexDirection: 'row', gap: 10 }}></div>
        </>
    )
}
