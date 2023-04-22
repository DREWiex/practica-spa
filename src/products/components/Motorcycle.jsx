import { GridCards } from "./GridCards";
import { ProductDetail } from "./ProductDetail";
import { useLocation } from 'react-router-dom';

export const Motorcycle = () => {

    const category = 'motorcycle';

    const { pathname } = useLocation();


    return (

        <>

            <h1>Motorcycle</h1>

            {
                pathname == `/${category}` ? (<GridCards category={category} />) : (<ProductDetail category={category} />)
            }

        </>

    );

};