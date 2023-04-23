import { useParams } from 'react-router-dom';
import { Cards } from './Cards';
import { useFetchProducts } from '../hooks/useFetchProducts';

export const ProductDetail = () => {

    const { id } = useParams();

    const url = `https://dummyjson.com/products/${id}`;

    const { products } = useFetchProducts(url);


    return (

        <>

            <section className="">

                <Cards {...products} />

            </section>

        </>

    );

};