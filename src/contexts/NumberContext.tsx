import React, {useState} from "react";

export const NumberContext = React.createContext({});

export const NumberProvider = ({ children }) => {
    const [number, setNumber] = useState(() => 108);

    return (
        <NumberContext.Provider
            value={
                [number, setNumber]
            }
        >
            {children}
        </NumberContext.Provider>
    );
};
