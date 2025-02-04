import { createContext, useContext, useState } from 'react'

const ModalContext = createContext({ show: (content) => {}, close: () => {} })

function ModalContextProvider({ children }) {
    const [modal, setModal] = useState({ open: false, content: <></> })

    function show(content) {
        setModal({ open: true, content })
    }

    function close() {
        setModal({ open: false, content: <></> })
    }

    return (
        <ModalContext.Provider value={{ show, close }}>
            {children}
            <dialog open={modal.open}>
                {modal.content}
                <button onClick={() => close()}>닫기</button>
            </dialog>
        </ModalContext.Provider>
    )
}

function Modal1Button() {
    const { show } = useContext(ModalContext)
    return <button onClick={() => show(<h3>Modal 1</h3>)}>1 열기</button>
}

function Modal2Button() {
    const { show } = useContext(ModalContext)
    return <button onClick={() => show(<h3>Modal 2</h3>)}>2 열기</button>
}

function Modal3Button() {
    const { show } = useContext(ModalContext)
    return <button onClick={() => show(<h3>Modal 3</h3>)}>3 열기</button>
}

export default function Work19() {
    return (
        <ModalContextProvider>
            <Modal1Button />
            <Modal2Button />
            <Modal3Button />
        </ModalContextProvider>
    )
}
