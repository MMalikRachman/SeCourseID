import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import ProductPage from "./pages/product";
import DetailPage from "./pages/detail";
import CheckoutPage from "./pages/checkout";
import { Provider } from "react-redux";
import store from './store';


const routes = createBrowserRouter([{
    path: '/',
    element: <Layout/>,
    children: [
        {
            index: true,
            element: <ProductPage/>
        },
        {
            path: 'detail/:id',
            element: <DetailPage/>
        },
        {
            path: 'checkout',
            element: <CheckoutPage/>
        }
    ]
}])

const FinalProject = () => {
    return (
        <Provider store={store}>
            <RouterProvider router={routes} />
        </Provider>
    );
}

export default FinalProject;