import { useContext, createContext, useReducer } from 'react'
import '@/App.css'
import { createPortal } from 'react-dom'

const ModalContext = createContext({ open, close })

// 1. 모달은 일반적으로 제목과 내용이라는 템플릿을 갖는다.
function Modal({ type, open, title, content, onClose }) {
    function color(type) {
        switch (type.toUpperCase()) {
            case 'WARN':
                return 'orange'
            case 'ERROR':
                return 'red'
            case 'SUCCESS':
                return 'green'
            case 'INFO':
            default:
                return 'black'
        }
    }

    return (
        // 2. 모달은 일반적으로 종류가 4가지 정도된다 (INFO, WARN, ERROR, SUCCESS)
        <dialog open={open} style={{ borderColor: color(type) }}>
            <h3>{title}</h3>
            <div>{content}</div>
            <button onClick={onClose}>닫기</button>
        </dialog>
    )
}

const CLOSE = {
    type: 'CLOSE',
    isOpen: false,
    title: '',
    content: '',
}

function ModalProvider({ children }) {
    const [modal, dispatch] = useReducer(reducer, CLOSE)

    function reducer(prev, action) {
        switch (action.type.toUpperCase()) {
            case 'WARN_TYPEERROR':
                return {
                    isOpen: true,
                    type: 'WARN',
                    title: '타입 에러',
                    content: '타입 에러니 다시 하세요',
                }
            case 'WARN_TIMEOUT':
                return {
                    isOpen: true,
                    type: 'WARN',
                    title: '타임 아웃',
                    content: '타임 아웃이니 다시 하세요',
                }
            case 'CLOSE':
                return CLOSE
            default:
                return action
        }
    }

    function open({ type, title = '', content = '' }) {
        // @ts-ignore
        dispatch({ type, isOpen: true, title, content })
    }
    function close() {
        // @ts-ignore
        dispatch(CLOSE)
    }
    return (
        <ModalContext.Provider value={{ open, close }}>
            {children}
            {modal.isOpen &&
                // Non-modal Dialog
                createPortal(
                    <Modal
                        type={modal.type}
                        open={modal.isOpen}
                        title={modal.title}
                        content={modal.content}
                        onClose={close}
                    />,
                    document.body,
                )}
        </ModalContext.Provider>
    )
}

function ModalButton({ type, title = '', content = '', children }) {
    const { open } = useContext(ModalContext)
    return (
        <>
            <button onClick={() => open({ type, title, content })}>{children}</button>
        </>
    )
}

function AaronLecture6() {
    return (
        <>
            <ModalProvider>
                <ModalButton type={'INFO'} title={'정보'} content={'정보를 제공합니다.'}>
                    정보
                </ModalButton>
                <ModalButton type={'SUCCESS'} title={'성공'} content={'성공했습니다'}>
                    성공
                </ModalButton>
                <ModalButton type={'ERROR'} title={'실패'} content={'실패했습니다'}>
                    실패
                </ModalButton>
                <ModalButton type={'WARN'} title={'경고'} content={'경고합니다'}>
                    경고
                </ModalButton>
                <ModalButton type={'WARN_TYPEERROR'}>타입 에러</ModalButton>
                <ModalButton type={'WARN_TIMEOUT'}>타임 아웃</ModalButton>
                <ModalButton type={'CLOSE'}>CLOSE</ModalButton>
            </ModalProvider>
        </>
    )
}

export default AaronLecture6
