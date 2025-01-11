import { useState } from 'react'

export default function Work5() {
    const FEE_ADULT = 20000
    const FEE_NON_ADULT = 10000

    const [age, setAge] = useState(0)
    const [valid, setValid] = useState(false)
    const [entrance, setEntrance] = useState(FEE_NON_ADULT)

    return (
        <>
            <div style={{ fontSize: 25 }}>실습5</div>
            <hr />
            <input
                type='number'
                value={age}
                onChange={(e) => {
                    const newAge = Number(e.currentTarget.value)
                    setValid(() => {
                        const isValid = newAge >= 20 ? true : false

                        setEntrance(isValid ? FEE_ADULT : FEE_NON_ADULT)

                        return isValid
                    })
                    setAge(newAge)
                    setAge(Number(e.currentTarget.value))
                }}
            />

            {valid ? <div>성년입니다.</div> : <div style={{ color: 'red' }}>미성년입니다.</div>}
            <div>{entrance}</div>

            {age >= 20 ? <div>성년입니다.</div> : <div style={{ color: 'red' }}>미성년입니다.</div>}
            {age >= 20 ? <div>{FEE_ADULT}</div> : <div>{FEE_NON_ADULT}</div>}
        </>
    )
}
