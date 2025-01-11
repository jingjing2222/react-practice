import { useEffect, useRef } from 'react'

function AaronLecture2() {
    const reference = useRef(null)

    // console.log('렌더링 전 : ')
    // console.log(reference.current)
    // console.log(reference.current?.innerText)

    useEffect(() => {
        // console.log('렌더링 후 : ')
        // console.log(reference.current)
        // console.log(reference.current.innerText)
    }, [])

    return (
        <>
            <div style={{ fontSize: 25 }}>Aaron1</div>
            <hr />
            <div ref={reference}>apple</div>
        </>
    )
}

export default AaronLecture2
