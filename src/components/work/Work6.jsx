import React from 'react'
import { useState } from 'react'

export default function Work6() {
    const [ulItems, setUlItems] = useState([
        { name: 'Aaron', age: 10, desc: '안녕하세요' },
        { name: 'Baron', age: 30, desc: '반갑습니다' },
        { name: 'Caron', age: 22, desc: '처음뵙겠습니다' },
        { name: 'Daron', age: 17, desc: '보고싶었습니다' },
    ])

    const [OlItems, setOlItems] = useState([
        { name: 'Aaron', age: 10, desc: '안녕하세요' },
        { name: 'Baron', age: 30, desc: '반갑습니다' },
        { name: 'Caron', age: 22, desc: '처음뵙겠습니다' },
        { name: 'Daron', age: 17, desc: '보고싶었습니다' },
    ])

    return (
        <>
            <div style={{ fontSize: 25 }}>실습6</div>
            <hr />
            <div>
                <List items={ulItems} setItems={setUlItems} type='ul' />
            </div>
            <div>
                <List items={OlItems} setItems={setOlItems} type='ol' />
            </div>
        </>
    )
}

function ListType({ type, children }) {
    switch (type) {
        case 'ul':
        case 'ol':
            return React.createElement(type, null, children)
        default:
            throw new Error('타입 오류입니다 type : ' + type)
    }
}

function List({ items, setItems, type }) {
    return (
        <ListType type={type}>
            {items.map(({ name, age, desc }, idx) => (
                <ListItem
                    key={idx}
                    name={name}
                    age={age}
                    desc={desc}
                    setItems={setItems}
                    idx={idx}
                />
            ))}
        </ListType>
    )
}

function ListItem({ name, age, desc, setItems, idx }) {
    const [showInput, setShowInput] = useState(false)
    const [currentDesc, setCurrentDesc] = useState(desc)

    const editDesc = (e) => {
        setCurrentDesc(() => e.target.value)
    }

    const confirmButtonClick = (e) => {
        e.stopPropagation()
        setItems((prevItems) =>
            prevItems.map((item, i) => (i === idx ? { ...item, desc: currentDesc } : item)),
        )
        setShowInput(false)
    }

    const xButtonClick = (e) => {
        e.stopPropagation()
        setShowInput(() => false)
    }

    const keyDown = (e) => {
        if (e.key === 'Enter') {
            confirmButtonClick(e)
        }
    }

    const handleItemClick = () => {
        setShowInput(() => true)
    }

    return (
        <li className='li-items' onClick={handleItemClick}>
            <span>{name}</span>
            <span>{' | '}</span>
            <span>{age}</span>
            <span>{' | '}</span>
            {showInput ? (
                <>
                    <input
                        className='inputBox'
                        type='text'
                        defaultValue={desc}
                        onChange={editDesc}
                        onKeyDown={keyDown}
                    />
                    <button className='Button' onClick={confirmButtonClick}>
                        확인
                    </button>
                    <button className='Button' onClick={xButtonClick}>
                        취소
                    </button>
                </>
            ) : (
                <span>{desc}</span>
            )}
        </li>
    )
}
