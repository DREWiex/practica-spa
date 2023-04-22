import { useFetchProducts } from "../hooks/useFetchProducts";
import { Cards } from "./Cards";

export const GridCards = ({ category }) => {

    let url = `https://dummyjson.com/products/category/${category}`;

    const { products } = useFetchProducts(url, category);

    
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