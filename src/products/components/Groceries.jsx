import { GridCards } from "./GridCards";
import { ProductDetail } from "./ProductDetail";
import { useLocation } from 'react-router-dom';

export const Groceries = () => {

    const category = 'groceries';

    const { pathname } = useLocation();


    return (

        <>

            {
                pathname == `/${category}` ? (<GridCards category={category} />) : (<ProductDetail category={category} />)
            }

        </>

    );

};