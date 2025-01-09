import { useState } from 'react'
import '@/App.css'

function Input({ value, handleConfirm, handleCancel }) {
    const [typed, setTyped] = useState(value)

    return (
        <>
            <input type='text' value={typed} onChange={(e) => setTyped(e.target.value)} />
            <button onClick={(e) => handleConfirm(typed, setTyped)}>확인</button>
            <button onClick={(e) => handleCancel(typed, setTyped)}>취소</button>
        </>
    )
}

function ListItem({ name, age, desc }) {
    const [isClick, setClick] = useState(false)
    const [description, setDescription] = useState(desc)
    // 매우 조심하셔야하는 코드

    const updateEach = (id, updatedItem) => {
        // PUT API : /api/user/1 = 단일 유저 업데이트
        console.log(`/api/user/${id} API 에 다음 데이터를 전송합니다 : ` + updatedItem)
    }

    const confirmEdit = (typed, setTyped) => {
        const isConfirm = confirm(`${description} 요거 저장 ㄱ?`)
        if (isConfirm) {
            setDescription(typed) // 내가 입력값 => 기존 입력값 (새값 적용하기)
            setClick(false)
        } else {
            setTyped(description) // 기존 입력값 => 나의 입력값 (기존값 덮어쓰기)
            setClick(false)
        }
    }

    const cancelEdit = (typed, setTyped) => {
        setTyped(description) // 기존 입력값 => 나의 입력값 (기존값 덮어쓰기)
        setClick(false)
    }

    return (
        <li style={{ textAlign: 'left' }}>
            {name} | {age} |&nbsp;
            {isClick ? (
                <Input value={description} handleConfirm={confirmEdit} handleCancel={cancelEdit} />
            ) : (
                <span onClick={() => setClick(!isClick)}>{description}</span>
            )}
        </li>
    )
}

function UnorderedList({ items }) {
    return (
        <ul>
            {items.map((item, index) => (
                <ListItem key={index} {...item} />
            ))}
        </ul>
    )
}

function Review() {
    const items = [
        { name: 'Aaron', age: 10, desc: '안녕하세요' },
        { name: 'Baron', age: 30, desc: '반갑습니다' },
        { name: 'Caron', age: 22, desc: '처음뵙겠습니다' },
        { name: 'Daron', age: 17, desc: '보고싶었습니다' },
    ]

    const updateAll = (updatedItems) => {
        // PUT API : /api/users = 다수 유저 업데이트
        console.log('API 에 다음 데이터를 전송합니다 : ' + updatedItems)
    }

    return (
        <>
            <div style={{ fontSize: 25 }}>Review</div>
            <hr />
            <UnorderedList items={items} />
        </>
    )
}

export default Review
