// @ts-nocheck
import { useRef, useState } from 'react'

function InputForm({ onChange }) {
    return (
        <>
            <input type='number' onChange={onChange} />
        </>
    )
}

export default function Work9() {
    const [valid, setValid] = useState(false /* 성년 여부 */)
    const currnetAge = useRef(0)

    function validate(validate) {
        return validate ? <div>성년입니다.</div> : <div style={{ color: 'red' }}>미성년입니다.</div>
    }

    const onChangeValue = (e) => {
        currnetAge.current = Number(e.currentTarget.value)
        activateSetValid(19)
    }

    function activateSetValid(num) {
        if (currnetAge.current >= num) {
            setValid(true)
        } else setValid(false)
    }

    return (
        <>
            <div style={{ fontSize: 25 }}>실습9</div>
            <hr />
            <InputForm onChange={onChangeValue} />
            <>{validate(valid)}</>
        </>
    )
}
