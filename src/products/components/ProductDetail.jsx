import { Link, useParams } from 'react-router-dom';
import { Cards } from './Cards';
import { useFetchProducts } from '../hooks/useFetchProducts';

export const ProductDetail = ({ category }) => {

    let { id } = useParams();

    const { products } = useFetchProducts(null, id); // paso como argumento 'null' en vez de 'category' para la url del fetch() sea la del single product ('id')

    console.log(category); //! category == undefined


    return (

        <>

            <button>
                <Link to={`/${category}`}> Volver </Link> 
            </button>

            <Cards {...products}/>

        </>

    );

};