import { createHashRouter } from "react-router-dom"
import FrontLayout from "../layouts/FrontLayout"
import ProductsPage from "../pages/ProductsPage"
import ShoppCartPage from "../pages/ShoppCartPage"
import ProductsDetailPage from "../pages/ProductsDetailPage"
import LoginPage from "../pages/LoginPage"
import ProductListPage from "../pages/admin/ProductListPage"
// import AdminLayout from "../layouts/AdminLayout"
import NotFound from "../pages/NotFound"
import HomePage from "../pages/HomePage"
import AdminLayout from "../layouts/AdminLayout"


const router = createHashRouter ([
    {
        path: '/',
        element: <FrontLayout/>,
        children: [
            {
                path: '',
                element: < HomePage />
            },
            {
                path: 'products',
                element: < ProductsPage />
            },
            {
                path: 'shoppcart',
                element: < ShoppCartPage />
            },
            {
                path: 'products/:id',
                element: < ProductsDetailPage />
            }
        ]
    },
    {
        path: '/login',
        element: < LoginPage />
    },
    {
        
        path: '/admin',
        element: < AdminLayout />,
        children: [
            {
                index: true,
                element:< ProductListPage />
            },
            {
                path: 'productList',
                element: < ProductListPage />
            }
        ]
    },
    {
        path: '*',
        element: < NotFound />
    }
], {
    future: { 
        v7_relativeSplatPath: true,
        v7_startTransition: true,
     }
    
})

export default router