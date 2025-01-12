import { Outlet, ScrollRestoration } from 'react-router-dom'
import TheHeader from '@/components/layout/TheHeaders'

export default function DefaultLayout() {
    return (
        <>
            <TheHeader />
            <Outlet />
            <ScrollRestoration />
        </>
    )
}
