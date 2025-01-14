import { useCookies } from "react-cookie"

export default function LoginInfo() {
    const [loginCookies] = useCookies(['userId'])
    return (
        <>
            {loginCookies?.userId && (
                <div style={{ fontSize: 10 }} className='nav-bar-item'>
                    {loginCookies?.userId}님 환영합니다!
                </div>
            )}
        </>
    )
}
