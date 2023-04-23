import { useFetchProducts } from "../hooks/useFetchProducts";
import { Cards } from "./Cards";

export const GridCards = ({ category }) => {

    const url = `https://dummyjson.com/products/category/${category}`;

    const { products } = useFetchProducts(url);


    return (

        <section className="grid-container">

            {
                products.map(product => (
                    <Cards {...product} key={product.id} />
                ))
            }

        </section>

    );

};