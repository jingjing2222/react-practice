import { useRef } from 'react'

export default function Work12() {
    const refer = useRef(null)
    const sources = [
        'https://vjs.zencdn.net/v/oceans.mp4',
        'https://lamberta.github.io/html5-animation/examples/ch04/assets/movieclip.mp4',
    ]
    // console.log('- rerendered')

    function changeVideo(num) {
        refer.current.src = sources[num - 1]
    }

    return (
        <>
            <div style={{ fontSize: 25 }}>실습12</div>
            <hr />
            <video ref={refer} autoPlay controls width={500} />
            <div>
                <button onClick={() => changeVideo(1)}>전환 1</button>
                <button onClick={() => changeVideo(2)}>전환 2</button>
            </div>
        </>
    )
}
