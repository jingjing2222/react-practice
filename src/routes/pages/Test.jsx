import CookieLogin from '@/components/test/CookieLogin'
import Play from '@/components/test/GetTest0'
import GetTest1 from '@/components/test/GetTest1'
import GetTest2 from '@/components/test/GetTest2'
import GetTest3 from '@/components/test/GetTest3'

export default function Test() {
    return (
        <div className='container'>
            <div className='container-item'>
                <GetTest1 />
            </div>
            <div className='container-item'>
                <GetTest2 />
            </div>
            <div className='container-item'>
                <GetTest3 />
            </div>
            <div className='container-item'>
                <Play />
            </div>
            <div className='container-item'>
                <CookieLogin />
            </div>
        </div>
    )
}
