import { useEffect, useState } from "react";
import { getProducts } from "../helpers/getProducts";

export const useFetchProducts = (url, category) => {

    const [products, setProducts] = useState([]);

    const fetchingProducts = async () => {

        const prods = await getProducts(url, category);

        setProducts(prods);

    };

    useEffect(() => {

        fetchingProducts();

    }, []);



    return{
        products // devuelve el estado, que es el objeto de la respuesta del fetch()
    };

};