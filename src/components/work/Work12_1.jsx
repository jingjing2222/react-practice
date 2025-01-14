import '@/App.css'
import { useRef, useState } from 'react'

export default function Work12_1() {
    const [render, setRender] = useState(true)
    // function registration() {}

    return (
        <>
            <div style={{ fontSize: 25 }}>실습12_1</div>
            <hr />
            <section style={{ textAlign: 'start', width: 400 }}>
                <Input category={'username'} length={10} />
                <Input category={'password'} require />
                <button onClick={() => setRender((prev) => !prev)}>회원가입 완료</button>
                {render}
            </section>
        </>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
function Input({ category, length = 0, require = false }) {
    const [valid, setValid] = useState(true)
    const ref = useRef(null)
    const error = { username: '글씨가 10보다 작아야 합니다.', password: '입력은 필수입니다' }

    const validate = (e, setValid, length = undefined, require = false) => {
        if (require) setValid(e.target.value.length !== 0)
        if (length) setValid(e.target.value.length <= length)
    }

    return (
        <>
            <div>
                {category} :
                <input
                    ref={ref}
                    placeholder={category}
                    onChange={(e) => validate(e, setValid, length, require)}
                />
                <ShowHideButton category={category} reference={ref} />
            </div>
            {!valid && <div style={{ color: 'red' }}>{error[category]}</div>}
        </>
    )
}

function ShowHideButton({ category, reference }) {
    const onShowClick = (e) => {
        if (reference.current.type === 'password') {
            reference.current.placeholder = '********'
            reference.current.type = 'text'
            // @ts-ignore
            e.target.innerText = '보이기'
        } else if (reference.current.type === 'text') {
            reference.current.placeholder = 'password'
            reference.current.type = 'password'
            // @ts-ignore
            e.target.innerText = '안 보이기'
        }
    }
    return <>{category === 'password' && <button onClick={onShowClick}>안보이기</button>}</>
}
