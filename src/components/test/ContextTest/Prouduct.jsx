import { CartListContext } from '@/components/test/ContextTest'
import { useContext, useEffect, useState } from 'react'

export default function ProductList() {
    const { cartList, setCartList } = useContext(CartListContext)
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch('http://localhost:3001/api/products')
            .then((response) => {
                if (!response.ok) throw new Error('네트워크 에러')
                return response.json()
            })
            .then((data) => {
                setProducts(data)
                setLoading(false)
            })
            .catch((error) => {
                setError(error.message)
                setLoading(false)
            })
    }, [])

    const addClickHandler = ({ id, name, price }) => {
        if (!cartList.some((cart) => cart.id === id)) {
            setCartList((cartList) => [...cartList, { id, name, price, count: 1 }])
        } else {
            setCartList(
                cartList.map((cart) => {
                    const newCart = { ...cart, count: cart.count + 1 }
                    return cart.id === id ? newCart : { ...cart }
                }),
            )
        }
    }
    if (loading) return <div>로딩중...</div>
    if (error) return <div>에러: {error}</div>

    return (
        <ol>
            {products.map(({ id, name, price }) => {
                return (
                    <>
                        <li key={id}>
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
