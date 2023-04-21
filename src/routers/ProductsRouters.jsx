import { Route, Routes, Navigate } from 'react-router-dom';
import { BrowserPage, FurniturePage, GroceriesPage, HomePage, MotorcyclePage, ProductsPage } from '../products/pages';

export const ProductsRouters = () => {


    return (

        <Routes>

            <Route path='products' element={<ProductsPage />} />
            <Route path='groceries' element={<GroceriesPage />} />
            <Route path='furniture' element={<FurniturePage />} />
            <Route path='motorcycle' element={<MotorcyclePage />} />
            <Route path='browser' element={<BrowserPage />} />
            <Route path='logout' element={<HomePage />} />


            <Route path='/*' element={<Navigate to={'products'} />} />

        </Routes>

    );

};