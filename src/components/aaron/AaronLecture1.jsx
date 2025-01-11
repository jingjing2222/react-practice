import { useState, useEffect } from 'react'

function FirstInputComponent({ value, onChange }) {
    const [text, setText] = useState(value)

    useEffect(() => {
        onChange(text)
    }, [text])

    // useEffect(() => {
    //     setText(value)
    // }, [value])

    return (
        <input
            value={text}
            onChange={(e) => {
                setText(e.target.value)
            }}
        />
    )
}

function AaronLecture1() {
    const [text, setText] = useState('')

    return (
        <>
            <div style={{ fontSize: 25 }}>Aaron1</div>
            <hr />
            <FirstInputComponent value={text} onChange={(value) => setText(value)} />
            <FirstInputComponent value={text} onChange={(value) => setText(value)} />
        </>
    )
}

export default AaronLecture1
