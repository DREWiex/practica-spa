import { useState } from 'react';
import { SearchContext } from './SearchContext';


export const UserProvider = ({ children }) => {

    const [search, setSearch] = useState('');

    return (

        <SearchContext.Provider value={{search, setSearch}}>

            { children }
            
        </SearchContext.Provider>

    );

};