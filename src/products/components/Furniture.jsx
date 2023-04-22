import { GridCards } from "./GridCards";
import { ProductDetail } from "./ProductDetail";
import { useLocation } from 'react-router-dom';

export const Furniture = () => {

    const category = 'furniture';

    const { pathname } = useLocation();
    

    return (

        <>

            {
                pathname == `/${category}` ? (<GridCards category={category} />) : (<ProductDetail category={category} />)
            }

        </>

    );

};