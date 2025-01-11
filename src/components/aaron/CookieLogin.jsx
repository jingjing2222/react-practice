import { useState } from 'react'
import { useCookies } from 'react-cookie'

export default function CookieLogin() {
    const [userId, setUserId] = useState('')
    const [cookie, setCookie] = useCookies(['userId'])

    return (
        <>
            <span>비회원 번호 : </span>
            <input
                type='text'
                onChange={(e) => {
                    const value = e.currentTarget.value
                    setUserId(() => {
                        setCookie('userId', value, { path: '/' })
                        return value
                    })
                }}
            />
        </>
    )
}
