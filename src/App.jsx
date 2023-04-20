import { Route, Routes, Navigate } from 'react-router-dom';
import { LoginPage } from './auth/pages/LoginPage';
import { BrowserPage, FurniturePage, GroceriesPage, HomePage, MotorcyclePage, ProductsPage } from './products/pages';

function App() {

  return (

    <>

    <header className="flex bg-dark">
      <p>Práctica SPA</p>
    </header>

    <main className="flex">

    <Routes>

      <Route path='login' element={<LoginPage />} />

      <Route path='/' element={<HomePage />} />
      <Route path='products' element={<ProductsPage />} />
      <Route path='groceries' element={<GroceriesPage />} />
      <Route path='furniture' element={<FurniturePage />} />
      <Route path='motorcycle' element={<MotorcyclePage />} />
      <Route path='browser' element={<BrowserPage />} />

      <Route path='/*' element={<Navigate to={'/'} />} />

    </Routes>

    </main>

    <footer className="flex bg-dark">
      Footer
    </footer>

    </>

  );

};

export default App;