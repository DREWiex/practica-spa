import { useEffect, useState } from "react";
import { getProducts } from "../helpers/getProducts";

export const useFetchProducts = (url, category) => { //! aquí me podría interesar pasar el search, en caso de que la category la pueda rescatar el fetch directo

    const [products, setProducts] = useState([]);

    //! importar estado de search con useContext y pasárselo al useEffect en dependencia
    

    const fetchingProducts = async () => {

        const prods = await getProducts(url, category);

        setProducts(prods);

    }; //! FUNC-FETCHINGPRODUCTS


    useEffect(() => {

        fetchingProducts();

    }, [category]);


    return{
        products // devuelve el estado, que es el objeto de la respuesta del fetch()
    };

};