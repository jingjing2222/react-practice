import { Link } from 'react-router-dom'

export default function TheHeader() {
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
                </div>
            </nav>
        </header>
    )
}
// 방가방가~
