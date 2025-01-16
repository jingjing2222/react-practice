import ComponentHeader from '@/components/layout/ComponentHeader'
import { useState } from 'react'

export default function Fifa() {
    const [matchLists, setMatchLists] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const matchListClick = () => {
        console.log(import.meta.env.Fifa_API_KEY)
        fetch(
            'https://open.api.nexon.com/fconline/v1/match?matchtype=30&offset=0&limit=100&orderby=desc',
            {
                headers: {
                    'x-nxopen-api-key':
                        'test_459e7903ae25dde16fcedd65231ef294e13ac185c05994ea9fc51c141a8d0670efe8d04e6d233bd35cf2fabdeb93fb0d',
                },
            },
        )
            .then((response) => {
                if (!response.ok) throw new Error('네트워크 에러')
                return response.json()
            })
            .then((data) => {
                setMatchLists(data)
                setLoading(false)
            })
            .catch((error) => {
                setError(error.message)
                console.log(error.message)
                setLoading(false)
            })
    }

    const matchClick = () => {}

    return (
        <>
            <ComponentHeader title={'Fifa'} />
            <button onClick={matchListClick}>매치 정보 전체 가져오기</button>
            {matchLists.map((mapList, idx) => {
                return (
                    <div key={idx} onClick={matchClick}>
                        {mapList}
                    </div>
                )
            })}
            <img src='https://cdn.sofifa.net/players/158/023/23_60.png'></img>
        </>
    )
}
