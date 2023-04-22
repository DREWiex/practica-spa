import { Link, useParams } from 'react-router-dom';
import { Cards } from './Cards';
import { useFetchProducts } from '../hooks/useFetchProducts';

export const ProductDetail = ({ category }) => {

    let { id } = useParams();

    let url = `https://dummyjson.com/products/${id}`;

    const { products } = useFetchProducts(url, category);


    return (

        <>

            <button>
                <Link to={`/${category}`}> Volver </Link> 
            </button>

            <Cards {...products}/>

        </>

    );

};