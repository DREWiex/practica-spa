import { Route, Routes } from 'react-router-dom';
import { BrowserPage, FurniturePage, GroceriesPage, HomePage, MotorcyclePage, ProductsPage } from './products/pages';

function App() {

  return (

    <>

    <header className="flex bg-dark">
      <p>Práctica SPA</p>
    </header>

    <main className="flex">

    <Routes>

      <Route path='/' element={<HomePage />} />
      <Route path='products' element={<ProductsPage />} />
      <Route path='groceries' element={<GroceriesPage />} />
      <Route path='furniture' element={<FurniturePage />} />
      <Route path='motorcycle' element={<MotorcyclePage />} />
      <Route path='browser' element={<BrowserPage />} />

    </Routes>

    </main>

    <footer className="flex bg-dark">
      Footer
    </footer>

    </>

  );

};

export default App;