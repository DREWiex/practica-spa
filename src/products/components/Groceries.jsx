import { GridCards } from "./GridCards";
import { ProductDetail } from "./ProductDetail";
import { useLocation } from 'react-router-dom';

export const Groceries = () => {

    const category = 'groceries';

    //const { pathname } = useLocation();


    console.log('CATEGORY EN GROCERIES:', category);


    return (

        <>

            <h1> Groceries </h1>

            <GridCards category={category} />

            {/* {
                pathname == `/${category}` ? (<GridCards category={category} />) : (<ProductDetail category={category} />)
            } */}

        </>

    );

};