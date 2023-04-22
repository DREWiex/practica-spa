import { useContext, useState } from "react";
import { BrowserForm } from "./BrowserForm";
import { BrowserResults } from "./BrowserResults";
import { SearchContext } from '../context/SearchContext'

export const Browser = () => {

    const [search, setSearch] = useState('');

    //const { search, setSearch } = useContext(SearchContext);


    return (

        <>

            <h1>Browser</h1>

            <BrowserForm setSearch={setSearch} />

            <BrowserResults search={search} />

        </>

    );

};