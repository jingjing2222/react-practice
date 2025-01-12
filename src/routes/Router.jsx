import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '@/routes/pages/Home'
import Work from '@/routes/pages/Work'
import Aaron from '@/routes/pages/Aaron'
import DefaultLayout from '@/routes/layouts/DefaultLayout'
import Test from '@/routes/pages/Test'

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
            {
                path: '/Test',
                element: <Test />,
            },
        ],
    },
])

export default function Router() {
    return <RouterProvider router={router} />
}
