import Review from '@/components/aaron/Review'
import AaronLecture1 from '@/components/aaron/AaronLecture1'
import AaronLecture2 from '@/components/aaron/AaronLecture2'
import CookieLogin from '@/components/aaron/CookieLogin'
// import '@/routes/pages/App.css'

export default function Aaron() {
    return (
        <div className='container'>
            <div className='container-item'>
                <Review />
            </div>
            <div className='container-item'>
                <AaronLecture1 />
            </div>
            <div className='container-item'>
                <AaronLecture2 />
            </div>
            <div className='container-item'>
                <CookieLogin />
            </div>
        </div>
    )
}
