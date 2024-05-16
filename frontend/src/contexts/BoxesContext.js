import React, { useState, createContext, useContext } from 'react';

export const BoxesContext = createContext();

export const useBoxes = () => useContext(BoxesContext);

export const BoxesProvider = ({ children }) => {
    const [boxes, setBoxes] = useState([
        { id: 1, text1: '5,000', text2: 'new sign ups' },
        { id: 2, text1: '$50,000', text2: 'MRR' },
        { id: 3, text1: '1,000+', text2: '5 star reviews' },
        { id: 4, text1: '#1', text2: 'Product Hunt' },
    ]);

    const [boxFontSizes, setBoxFontSizes] = useState({
        1: { titleFontSize: 16, descriptionFontSize: 14 },
        2: { titleFontSize: 16, descriptionFontSize: 14 },
        3: { titleFontSize: 16, descriptionFontSize: 14 },
        4: { titleFontSize: 16, descriptionFontSize: 14 },
    });

    return (
        <BoxesContext.Provider value={{ boxes, setBoxes, boxFontSizes, setBoxFontSizes }}>
            {children}
        </BoxesContext.Provider>
    );
};
