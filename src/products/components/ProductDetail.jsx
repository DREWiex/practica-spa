import { Link } from 'react-router-dom';
import { Cards } from './Cards';

export const ProductDetail = () => {

    // tengo que recibir la categoría y el id

    const category = 123;

    return (

        <>

            <button><Link to={`/${category}`}> Volver </Link></button>

            {/* <Cards /> */}

        </>

    );

};