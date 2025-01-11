import { useRef } from 'react'
import { useCookies } from 'react-cookie'
import * as v from 'valibot'

export default function CookieLogin() {
    const [cookie, setCookie] = useCookies(['userId'])
    const userIdRef = useRef('')

    const onClickHandler = () => {
        const Schema = v.object({
            userId: v.pipe(v.string(), v.minLength(3), v.maxLength(10)),
        })
        const result = v.safeParse(Schema, { userId: userIdRef.current })
        if (!result.success) console.log(result.issues[0]?.message)
        else setCookie('userId', userIdRef.current, { path: '/' })
    }

    return (
        <>
            <span>비회원 번호 : </span>
            <input
                type='text'
                onChange={(e) => {
                    userIdRef.current = e.currentTarget.value
                }}
            />
            <button onClick={onClickHandler}>입력</button>
            <div>기존 비회원 번호:{cookie?.userId}</div>
        </>
    )
}
