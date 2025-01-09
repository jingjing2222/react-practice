import { useState } from 'react'

function Work3() {
    const [age, setAge] = useState(0)
    const [valid, setValid] = useState(false /* 성년 여부 */)

    function validate(validate) {
        return validate ? <div>성년입니다.</div> : <div style={{ color: 'red' }}>미성년입니다.</div>
    }

    return (
        <>
            <div style={{ fontSize: 25 }}>실습3</div>
            <hr />
            <input
                type='number'
                value={age}
                onChange={(e) => {
                    const newAge = Number(e.currentTarget.value)
                    setAge(() => {
                        if (newAge >= 20) setValid(true)
                        else setValid(false)
                        return newAge
                    })
                }}
            />
            <>{validate(valid)}</>
        </>
    )
}

export default Work3
