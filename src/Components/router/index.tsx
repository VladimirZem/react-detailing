import Cart from "../../pages/Cart";
import Detailing from "../../pages/Detailing";
import FullProduct from "../../pages/FullProduct";
import Home from "../../pages/Home";
import Login from "../../pages/Login";
import NotFound from "../../pages/NotFound";
import Shop from "../../pages/Shop";



export const publicRoutes = [
    { path: '/', component: <Home /> },
    { path: '/detailing/:cardTitle', component: <Detailing /> },
    { path: '/shop', component: <Shop /> },
    { path: '/cart', component: <Cart /> },
    { path: '/shop/:productId', component: <FullProduct /> },
    { path: '*', component: <NotFound /> }
]

export const privateRoutes = [
    { path: '/login', component: <Login /> },
]