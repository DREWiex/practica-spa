import { useEffect, useState } from "react";
import { getProducts } from "../helpers/getProducts";

export const useFetchProducts = (category, id) => {

    const [products, setProducts] = useState([]);

    const fetchingProducts = async () => {

        const prods = await getProducts(category, id);

        setProducts(prods);

    };

    useEffect(() => {

        fetchingProducts();

    }, []);



    return{
        products // devuelve el estado, que es el objeto de la respuesta del fetch()
    };

};