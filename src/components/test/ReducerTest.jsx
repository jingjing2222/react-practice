import ComponentHeader from '@/components/layout/ComponentHeader'
import { useReducer } from 'react'

function ShowDiv({ isOpen = true, content, dispatch }) {
    return (
        <>
            <div onClick={() => dispatch({ isOpen, content })}>{isOpen && content}</div>
        </>
    )
}

export default function ReducerTest() {
    const [result, dispatch] = useReducer(reducer, { isOpen: false, content: '' })

    function reducer(prev, action) {
        switch (action.content.toUpperCase()) {
            case 'RED':
                return {
                    isOpen: true,
                    content: '빨강',
                }
            case 'BLUE':
                return {
                    isOpen: true,
                    content: 'BLUE',
                }
            case 'YELLOW':
                return {
                    isOpen: true,
                    content: 'YELLOW',
                }
            case 'BLACK':
                return {
                    isOpen: true,
                    content: 'BLACK',
                }
            default:
                return {
                    isOpen: true,
                    content: '입력 되지 않음',
                }
        }
    }
    return (
        <>
            <ComponentHeader title={'ReducerTest'} />
            <ShowDiv result={{ content: 'RED' }} dispatch={dispatch} />
        </>
    )
}
