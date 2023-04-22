import { GridCards } from "./GridCards";
import { ProductDetail } from "./ProductDetail";

export const Motorcycle = () => {

    const category = 'motorcycle';

    return (

        <>

            <GridCards category={category} />

            {/* <ProductDetail category={category} /> */}

        </>

    );

};