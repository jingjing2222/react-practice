import { CartListContext } from '@/components/test/ContextTest'
import { useContext } from 'react'

export default function ProductList() {
    const { cartList, setCartList } = useContext(CartListContext)
    const products = [
        { id: 1, name: 'Product A', price: 100 },
        { id: 2, name: 'Product B', price: 200 },
        { id: 3, name: 'Product C', price: 300 },
    ]

    const addClickHandler = ({ id, name, price }) => {
        if (!cartList.some((cart) => cart.id === id)) {
            setCartList((cartList) => [...cartList, { id, name, price, count: 1 }])
        } else {
            setCartList(
                cartList.map((cart) => {
                    const newCart = { ...cart, count: cart.count + 1 }
                    console.log(newCart)
                    return cart.id === id ? newCart : { ...cart }
                }),
            )
        }
    }

    return (
        <ol>
            {products.map(({ id, name, price }) => {
                return (
                    <>
                        <li>
                            {`제품명: ${name} | 가격: ${price}`}
                            <button onClick={() => addClickHandler({ id, name, price })}>
                                추가
                            </button>
                        </li>
                    </>
                )
            })}
        </ol>
    )
}
