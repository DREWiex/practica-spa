import { useFetchProducts } from "../hooks/useFetchProducts";
import { Cards } from "./Cards";

export const BrowserResults = ({ search }) => {

  const url = `https://dummyjson.com/products/search?q=${search}`;

  const { products } = useFetchProducts(url, search);

  // 'results' devolverá los productos filtrados que pertenezcan solo a las categorías elegidas
  const results = products.filter(product => product.category == 'groceries' || product.category == 'furniture' || (product.category == 'motorcycle'));


  return (

    <>

      <section>

        <h2>Results</h2>

        {
          search == '' ? <p> Search a product! </p> :
            results.map(product => (
              <Cards {...product} key={product.id} />
            ))
        }

        {
          search != '' && results.length == 0 && <p> No products were found. </p>
        }

      </section>

    </>

  );

};