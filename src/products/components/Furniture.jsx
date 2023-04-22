import { GridCards } from "./GridCards";
import { ProductDetail } from "./ProductDetail";
import { useLocation } from 'react-router-dom';

export const Furniture = () => {

    const category = 'furniture';

    const { pathname } = useLocation();


    return (

        <>

            <h1> Furniture </h1>

            {
                pathname == `/${category}` ? (<GridCards category={category} />) : (<ProductDetail category={category} />)
            }

        </>

    );

};