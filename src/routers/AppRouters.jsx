import { Route, Routes, Navigate } from 'react-router-dom';
import { LoginPage } from '../auth/pages/LoginPage';
import { BrowserPage, FurniturePage, GroceriesPage, HomePage, MotorcyclePage, ProductDetailPage, ProductsPage } from '../products/pages';

export const AppRouters = () => {

    // const status = 'authenticated'; // se recoge de un context o redux // va a estar en el objeto del user desde el principio

    // varias operaciones en un ternario, se utilizan paréntesis y se pueden se parar por comas

    return (

        <Routes>

            {/* {
                status === 'not-authenticated' ? (

                    <Route path='/' element={<HomePage />} />,
                    <Route path='login' element={<LoginPage />} />,
                    <Route path='register' element={<RegisterPage />} />,

                    <Route path='/*' element={<Navigate to={'/'} />} />

                ) : (

                    <ProductsRouters />,
                    <Route path='logout' element={<LogoutPage />} />, // dependiendo del planteamiento, se puede hacer un Navigate to / directo, ya que si solo limpia el usuario directamente desde el click del link, no necesito page ni component específica

                    <Route path='/*' element={<Navigate to={'/'} />} />

                )
            } */}

            <Route path='/' element={<HomePage />} />
            <Route path='login' element={<LoginPage />} />

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