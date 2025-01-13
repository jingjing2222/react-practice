import { useRef, useState } from 'react'

/* useRef를 통해 react-hook-form 구현하기 */
export default function AaronLecture3() {
    const refer = useRef(null)
    const [valid, setValid] = useState(true)
    const [input, setInput] = useState('')

    return (
        <>
            <div style={{ fontSize: 25 }}>Aaron3</div>
            <hr />
            <input
                ref={refer}
                onChange={(e) => {
                    setValid(e.target.value.length <= 10)
                }}
            />
            <button
                onClick={() => {
                    if (valid) setInput(refer.current.value)
                    else console.log('10글자를 넘으면 안됩니다')
                }}
            >
                제출
            </button>
            {input}
        </>
    )
}
