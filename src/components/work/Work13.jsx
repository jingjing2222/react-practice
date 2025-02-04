// @ts-nocheck
import { useEffect, useRef, useState } from 'react'
import '@/App.css'
import ComponentHeader from '@/components/layout/ComponentHeader'

function Header({ title }) {
    return (
        <>
            <div style={{ position: 'sticky', top: 0, height: 60, backgroundColor: 'white' }}>
                <div id='header-title' style={{ color: 'black', opacity: 0 }}>
                    {title}
                </div>
            </div>
        </>
    )
}

function Title({ title }) {
    const titleReference = useRef(null)

    useEffect(() => {
        // 1. Define 정의
        const observer = new window.IntersectionObserver(([entry]) => {
            if (!entry.intersectionRatio) {
                document.getElementById('header-title').classList.add('show-header-title')
            } else {
                document.getElementById('header-title').classList.remove('show-header-title')
            }
        })
        // 2. Attach 부착
        observer.observe(titleReference.current)
        // 3. Detach 삭제 (소멸자)
        return () => {
            observer.disconnect()
        }
    }, [])

    return <h3 ref={titleReference}>{title}</h3>
}

function Content({ content }) {
    return <div>{content}</div>
}

function Post({ title, content }) {
    const [show, setShow] = useState(false)
    return (
        <div>
            <Title title={title} />
            <button onClick={() => setShow((prev) => !prev)}>가리기</button>
            {show ? <Content content={content} /> : <div>위에 누르세용</div>}
        </div>
    )
}

function Work13() {
    const example = {
        title: 'Lorem ipsum',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim',
    }
    return (
        <>
            <ComponentHeader title={'실습13'} />
            <Header title={example.title} />
            <Post title={example.title} content={example.content} />
        </>
    )
}

export default Work13
