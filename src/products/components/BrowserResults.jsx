import { useFetchProducts } from "../hooks/useFetchProducts";
import { Cards } from "./Cards";

export const BrowserResults = ({ search }) => {

  const url = `https://dummyjson.com/products/search?q=${search}&limit=5`;

  const { products } = useFetchProducts(url, search);


  return (

    <>

      <section>

        <h2>Results</h2>

        {
          search == '' ? <p> Search a product! </p> : products.map( product => ( <Cards {...product} key={product.id} /> ))
        }

        {
          products.length == 0 && <p> No products were found. </p>
        }

      </section>

    </>

  );

};