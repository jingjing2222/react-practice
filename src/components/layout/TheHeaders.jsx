import { Link } from 'react-router-dom'
import { Cookies } from 'react-cookie'

export default function TheHeader() {
    const userInCookie = new Cookies()
    const userId = userInCookie.get('userId')
    return (
        <header>
            <nav className='nav-bar'>
                <h1 className='nav-bar-items'>React Practice</h1>
                <div className='nav-bar-items'>
                    <div className='nav-bar-item'>
                        <Link to='/'>Home</Link>
                    </div>
                    <div className='nav-bar-item'>
                        <Link to='/work'>Work</Link>
                    </div>
                    <div className='nav-bar-item'>
                        <Link to='/aaron'>Aaron</Link>
                    </div>
                    <div className='nav-bar-item'>
                        <Link to='/test'>Test</Link>
                    </div >
                    {userId && <div style={{fontSize:10}} className='nav-bar-item'>{userId}님 환영합니다!</div>}
                </div>
            </nav>
        </header>
    )
}
// 방가방가~
