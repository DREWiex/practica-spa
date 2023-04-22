import { GridCards } from "./GridCards";
import { ProductDetail } from "./ProductDetail";

export const Groceries = () => {

    const category = 'groceries';

    return (

        <>

            <GridCards category={category} />

            {/* <ProductDetail category={category} /> */}

        </>

    );

};