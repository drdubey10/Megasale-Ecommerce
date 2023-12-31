import React from "react";

import { createContext } from "react";

export const DataContext = createContext(null);

function DataProvider({children}) {
    const [account, setAccount] = React.useState('');

    return (
        <DataContext.Provider value={{
            account,
            setAccount
        }}>
        {children}
        </DataContext.Provider>
    )
}
export default DataProvider;