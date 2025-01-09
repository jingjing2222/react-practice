import { useRef, useState } from 'react'

export default function Work10() {
    const inform = ['이름', '설명', '메일']
    const inputValue = useRef(['', '', ''])
    const [validation, setValidation] = useState([false, false, false])

    const onChangeValue = (e, idx) => {
        inputValue.current[idx] = e.target.value
    }

    const submitClick = () =>
        inputValue.current.map((element, index) => {
            if (!element) {
                activeSetValidation(true, index)
            } else {
                activeSetValidation(false, index)
            }
        })

    function activeSetValidation(value, index) {
        setValidation((prev) => {
            return prev.map((each, idx) => (index === idx ? value : each))
        })
    }

    return (
        <>
            <div style={{ fontSize: 25 }}>실습10</div>
            <hr />
            <>
                {inform.map((title, idx) => {
                    return (
                        <InputForm
                            key={idx}
                            title={title}
                            onChangeValue={(e) => onChangeValue(e, idx)}
                            inform={inform[idx]}
                            validation={validation[idx]}
                        />
                    )
                })}
            </>
            <SubmitButton submitClick={submitClick}>제출</SubmitButton>
        </>
    )
}

function SubmitButton({ children, submitClick }) {
    return <input type='button' value={children} onClick={submitClick} />
}

function InputForm({ title, onChangeValue, inform, validation }) {
    return (
        <>
            <div>
                <span>{`${title}:`}</span>
                <input onChange={onChangeValue} />
            </div>
            <>
                {validation ? (
                    <div style={{ color: 'red' }}>{`${inform}은 필수 입력값입니다.`}</div>
                ) : (
                    <></>
                )}
            </>
        </>
    )
}
