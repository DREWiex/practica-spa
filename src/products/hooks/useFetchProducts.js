import { useEffect, useState } from "react";
import { getProducts } from "../helpers/getProducts";

export const useFetchProducts = (category) => {

    const [products, setProducts] = useState([]);

    const fetchingProducts = async () => {

        const prods = await getProducts(category);

        setProducts(prods);

    };

    useEffect(() => {

        fetchingProducts();

    }, []);



    return{
        products
    };

};