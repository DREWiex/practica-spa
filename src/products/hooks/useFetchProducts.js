import { useEffect, useState } from "react";
import { getProducts } from "../helpers/getProducts";

export const useFetchProducts = (url, search) => {

    const [products, setProducts] = useState([]);


    const fetchingProducts = async () => {

        const prods = await getProducts(url);

        setProducts(prods);

    }; //! FUNC-FETCHINGPRODUCTS


    useEffect(() => {

        fetchingProducts();

    }, [search]); // además de cuando se monten la primera vez los componentes que utilizan el fetch(), también quiero que se invoque 'fetchingProducts()' cuando haya una modificación en el estado 'search', es decir, en cada búsqueda que se haga


    return{
        products // devuelve el estado, que es el objeto de la respuesta del fetch()
    };

};