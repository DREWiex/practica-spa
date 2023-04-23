import { GridCards } from "./GridCards";

export const Groceries = () => {

    const category = 'groceries';


    return (

        <>

            <h1> Groceries </h1>

            <GridCards category={category} />

        </>

    );

};