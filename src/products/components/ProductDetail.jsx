import { Link, useParams } from 'react-router-dom';
import { Cards } from './Cards';
import { useFetchProducts } from '../hooks/useFetchProducts';

export const ProductDetail = () => {

    const { category, id } = useParams(); // 'category' lo utiliza el botón de volver y el 'id' la url del fetch()

    const url = `https://dummyjson.com/products/${id}`;

    const { products } = useFetchProducts(url);


    return (

        <>

            <button>
                <Link to={`/${category}`}> Back </Link>
            </button>

            <Cards {...products} />

        </>

    );

};