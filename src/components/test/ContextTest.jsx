/*
문제: 전역 상태로 쇼핑 카트 관리하기
목표:
react-context를 활용하여 쇼핑 카트의 전역 상태를 관리하세요.

기능 요구사항
상품 목록 페이지:
상품 목록을 화면에 렌더링합니다.
각 상품에는 "장바구니에 추가" 버튼이 있습니다.
장바구니 페이지:
장바구니에 담긴 상품들의 목록을 표시합니다.
각 상품 옆에 "삭제" 버튼을 추가하여 해당 상품을 장바구니에서 제거할 수 있습니다.
구현 조건
1. 전역 상태 관리를 위해 React Context를 사용하세요.
2. 전역 상태에는 다음 두 가지 정보가 포함되어야 합니다:
3. 장바구니에 담긴 상품 목록 (배열 형태)
4. 상품 추가 및 삭제를 위한 함수
useContext 훅을 사용하여 상품 목록 페이지와 장바구니 페이지에서 전역 상태에 접근하세요.
다음과 같은 기본 상품 데이터를 제공하세요:
const products = [
    { id: 1, name: "Product A", price: 100 },
    { id: 2, name: "Product B", price: 200 },
    { id: 3, name: "Product C", price: 300 },
];

두 개의 페이지를 구현하세요:
ProductList: 상품 목록을 렌더링하며 "장바구니에 추가" 버튼을 제공합니다.
Cart: 장바구니의 상품 목록을 렌더링하며 "삭제" 버튼을 제공합니다.
페이지 간 이동은 간단하게 상태 기반으로 처리하거나 react-router를 활용할 수 있습니다.
추가 도전 과제
장바구니에 동일한 상품을 여러 번 추가하면 수량(quantity)을 증가시키세요.
장바구니에 담긴 상품들의 총 금액을 계산하여 표시하세요.
*/

import { createContext, useState } from 'react'
import { Link } from 'react-router-dom'

export const CartListContext = createContext(null)

export function CarListProvider({ children }) {
    const [cartList, setCartList] = useState([])
    return (
        <>
            <CartListContext.Provider value={{ cartList, setCartList }}>
                {children}
            </CartListContext.Provider>
        </>
    )
}

export function ContextTest() {
    return (
        <>
            <span style={{ padding: 10 }}>
                <Link to='product'>ProductList</Link>
            </span>
            <span style={{ padding: 10 }}>
                <Link to='cart'>Cart</Link>
            </span>
            <></>
        </>
    )
}
