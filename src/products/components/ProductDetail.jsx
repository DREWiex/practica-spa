import { Link, useParams } from 'react-router-dom';
import { Cards } from './Cards';
import { useFetchProducts } from '../hooks/useFetchProducts';

export const ProductDetail = () => {

    const { category, id } = useParams();

    const url = `https://dummyjson.com/products/${id}`;


    const { products } = useFetchProducts(url, category);


    return (

        <>

            <button>
                <Link to={`/${category}`}> Volver </Link>
            </button>

            <Cards {...products} />

        </>

    );

};