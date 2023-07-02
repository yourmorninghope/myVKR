import auth from './pages/auth';
import cart from './pages/cart';
import catalogPage from './pages/catalogMain';
import itemPage from './pages/itemPage';
import mainPage from './pages/mainPage';
import sellerPage from './pages/sellerPage';
import userPage from './pages/userPage';
import sellerAccPage from './pages/sellerAccPage';
import sellerRegPage from './pages/sellerRegPage';
import {CART_ROUTE, SELLER_ACC_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SELLER_ROUTE, MAIN_ROUTE, USER_ROUTE, CATALOG_ROUTE, ITEM_ROUTE, SELLER_REG_ROUTE} from './utils/consts';

export const authRoutes = [
    {
        path: CART_ROUTE,
        Component: cart
    },

    {
        path: SELLER_ACC_ROUTE,
        Component: sellerAccPage
    },

    {
        path: USER_ROUTE,
        Component: userPage
    }


]

export const publicRoutes = [

    {
        path: LOGIN_ROUTE,
        Component: auth
    },

    {
        path: REGISTRATION_ROUTE,
        Component: auth
    },

    {
        path: SELLER_ROUTE + '/:id',
        Component: sellerPage
    },

    {
        path: MAIN_ROUTE,
        Component: mainPage
    },

    {
        path: CATALOG_ROUTE,
        Component: catalogPage
    },

    {
        path: ITEM_ROUTE + '/:id',
        Component: itemPage
    },

    {
        path: SELLER_REG_ROUTE,
        Component: sellerRegPage
    }

]