import ComponentHeader from '@/components/layout/ComponentHeader'
import { createContext, useContext, useState } from 'react'

const Context = createContext(0)

export default function AaronLecture5() {
    const [count, setCount] = useState(0)

    const up = () => setCount((prev) => prev + 1)
    const down = () => setCount((prev) => prev - 1)

    return (
        <>
            <ComponentHeader title={'useContext'} />
            {/* <ContextProvider> */}
            <Context.Provider
                // @ts-ignore
                value={{ count, up, down }}
            >
                <MainDiv />
            </Context.Provider>
            {/* </ContextProvider> */}
        </>
    )
}
function MainDiv() {
    return (
        <>
            <div>이곳은 버튼 컴포넌트입니다</div>
            <MainButton />
        </>
    )
}

function MainButton() {
    // @ts-ignore
    const { count, up, down } = useContext(Context)
    return (
        <>
            <button onClick={up}>증가 버튼</button>
            <button onClick={down}>감소 버튼</button>
            <div>count : {count}</div>
        </>
    )
}
