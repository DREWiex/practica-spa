import { Route, Routes, Navigate } from 'react-router-dom';
import { LoginPage } from '../auth/pages/LoginPage';
import { BrowserPage, FurniturePage, GroceriesPage, HomePage, MotorcyclePage, ProductDetailPage, ProductsPage } from '../products/pages';

export const AppRouters = () => {


    return (

        <Routes>

            <Route path='login' element={<LoginPage />} />

            <Route path='/' element={<HomePage />} />
            <Route path='products' element={<ProductsPage />} />
            <Route path='groceries' element={<GroceriesPage />} />
            <Route path='furniture' element={<FurniturePage />} />
            <Route path='motorcycle' element={<MotorcyclePage />} />
            <Route path='browser' element={<BrowserPage />} />
            <Route path='product/:id' element={<ProductDetailPage />} />

            <Route path='/*' element={<Navigate to={'/'} />} />

        </Routes>

    );

};