import { GridCards } from "./GridCards";
import { ProductDetail } from "./ProductDetail";

export const Furniture = () => {

    const category = 'furniture';


    return (

        <>

            <GridCards category={category} />

            {/* <ProductDetail category={category} /> */}

        </>

    );

};