import { useFetchProducts } from "../hooks/useFetchProducts";

export const BrowserResults = ({ search }) => {

  let url = `https://dummyjson.com/products/search?q=${search}`;

  const { products } = useFetchProducts(url, search);


  return (

    <>

      <h2>Results</h2>

    </>

  );

};