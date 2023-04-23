import { NavBar } from './components/NavBar';
import { AppRouters } from './routers/AppRouters';

function App() {

  return (

    <>

    <header className="flex bg-dark">

      <p> Práctica SPA </p>

    </header>
    

    <NavBar />


    <main className="flex">

    <AppRouters />

    </main>


    <footer className="flex bg-dark">
      
      <p> Footer </p>

    </footer>

    </>

  );

};

export default App;