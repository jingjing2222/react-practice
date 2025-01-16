import ComponentHeader from '@/components/layout/ComponentHeader'
import { useEffect, useState } from 'react'

export default function Work22() {
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])
    const [selected, setSelected] = useState('')
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
            .then((res) => {
                if (!res.ok) throw new Error('네트워크 에러')
                return res.json()
            })
            .then((json) => {
                setCategories(json)
                setSelected(json[0])
            })
            .catch((error) => console.log(error))
    }, [])

    useEffect(() => {
        if (selected !== '') {
            setLoading(true)
            fetch(`https://fakestoreapi.com/products/category/${selected}`)
                .then((response) => response.json())
                .then((data) => {
                    setLoading(false)
                    setProducts(data)
                })
                .catch((error) => console.error('Error:', error))
            console.log(selected)
            console.log('셀렉트')
        }
    }, [selected])

    const handleSelect = (e) => {
        setSelected(e.target.value)
    }

    return (
        <>
            <ComponentHeader title='Work22' />
            <select onChange={handleSelect} value={selected}>
                {categories.map((category, idx) => {
                    return (
                        <option key={idx} value={category}>
                            {category}
                        </option>
                    )
                })}
            </select>
            {loading ? (
                <div>{'loading...'}</div>
            ) : (
                <div style={{ display: 'flex', flexDirection: 'column', minHeight: '2000px' }}>
                    {products.map((product) => (
                        <div key={product.id} style={{ textAlign: 'start' }}>
                            <h3>{product.title}</h3>
                            <p>{product.description}</p>
                            <div style={{ color: 'orange' }}>{product.price}</div>
                        </div>
                    ))}
                </div>
            )}
        </>
    )
}
