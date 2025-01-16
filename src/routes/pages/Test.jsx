import { CarListProvider, ContextTest } from '@/components/test/ContextTest'
import CookieLogin from '@/components/test/CookieLogin'
import Fifa from '@/components/test/FIFA'
import Play from '@/components/test/GetTest0'
import GetTest1 from '@/components/test/GetTest1'
import GetTest2 from '@/components/test/GetTest2'
import GetTest3 from '@/components/test/GetTest3'
import Homapage from '@/components/test/Homepage'
import ReducerTest from '@/components/test/ReducerTest'
import { Outlet } from 'react-router-dom'

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
            <div className='container-item'>
                <CarListProvider>
                    <ContextTest />
                    <Outlet />
                </CarListProvider>
            </div>
            <div className='container-item'>
                <Fifa />
            </div>
            <div className='container-item'>
                <Homapage />
            </div>
            <div className='container-item'>
                <ReducerTest />
            </div>
        </div>
    )
}
