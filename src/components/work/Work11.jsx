import { useRef } from 'react'

function Work11() {
    const refer = useRef(null)

    // console.log('- rerendered')

    return (
        <>
            <div style={{ fontSize: 25 }}>실습11</div>
            <hr />
            <div ref={refer}> apple</div>
            <button onClick={() => (refer.current.style = 'color:red')}>변경</button>
        </>
    )
}

export default Work11
