import { CartListContext } from '@/components/test/ContextTest'
import { useContext } from 'react'

export default function Cart() {
    const { cartList, setCartList } = useContext(CartListContext)
    const deleteHandler = (idx) => {
        setCartList((cartList) => {
            const newCartList = [...cartList]
            newCartList.splice(idx, 1)
            return newCartList
        })
    }

    return (
        <ol>
            {cartList.map(({ name, price, count }, idx) => {
                console.log('??')
                return (
                    <>
                        <li>
                            {`제품명: ${name} | 가격: ${price} | 개수 ${count} | 총 가격 ${price * count}`}
                            <button onClick={() => deleteHandler(idx)}>삭제</button>
                        </li>
                    </>
                )
            })}
        </ol>
    )
}
