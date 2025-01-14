import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '@/routes/pages/Home'
import Work from '@/routes/pages/Work'
import Aaron from '@/routes/pages/Aaron'
import Header from '@/routes/layouts/Header'
import Test from '@/routes/pages/Test'
import Cart from '@/components/test/ContextTest/Cart'
import ProductList from '@/components/test/ContextTest/Prouduct'

const router = createBrowserRouter([
    {
        element: <Header />,
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
                children: [
                    { path: 'cart', element: <Cart /> },
                    { path: 'product', element: <ProductList /> },
                ],
            },
        ],
    },
])

export default function Router() {
    return <RouterProvider router={router} />
}
