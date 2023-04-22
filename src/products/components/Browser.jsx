import { useState } from "react";
import { BrowserForm } from "./BrowserForm";
import { BrowserResults } from "./BrowserResults";

export const Browser = () => {

    const [search, setSearch] = useState('');


    return (

        <>

            <h1>Browser</h1>

            <BrowserForm setSearch={setSearch} />

            <BrowserResults search={search} />

        </>

    );

};