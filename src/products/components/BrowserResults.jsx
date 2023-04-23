import { useFetchProducts } from "../hooks/useFetchProducts";
import { Cards } from "./Cards";

export const BrowserResults = ({ search }) => {

  const url = `https://dummyjson.com/products/search?q=${search}`;

  const { products } = useFetchProducts(url, search);

  // 'results' devolverá los productos filtrados que pertenezcan solo a las categorías elegidas
  const results = products.filter(product => product.category == 'groceries' || product.category == 'furniture' || (product.category == 'motorcycle'));


  return (

    <>

      <section className="flex-browser blue">

        <h2>Results</h2>

        {
          search == '' ? <div className="box-results success"> Search a product! </div> :
            results.map(product => (
              <Cards {...product} key={product.id} />
            ))
        }

        {
          search != '' && results.length == 0 && <div className="box-results danger"> No products were found. </div>
        }

      </section>

    </>

  );

};