import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// @ts-ignore
import Home from '@/routes/pages/Home'
import Work from '@/routes/pages/Work'
import Aaron from '@/routes/pages/Aaron'
import DefaultLayout from '@/routes/layouts/DefaultLayout'

const router = createBrowserRouter([
    {
        element: <DefaultLayout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/Work',
                element: <Work />,
            },
            {
                path: '/Aaron',
                element: <Aaron />,
            },
        ],
    },
])

export default function Router() {
    return <RouterProvider router={router} />
}
