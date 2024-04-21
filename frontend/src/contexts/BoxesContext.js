import React, { useState } from 'react';
import { BoxesContext } from '../hooks/useBoxState';

export const BoxesProvider = ({ children }) => {
    const [boxes, setBoxes] = useState([
        { id: 1, text1: 'Box 1 Text 1', text2: 'Box 1 Text 2' },
        { id: 2, text1: 'Box 2 Text 1', text2: 'Box 2 Text 2' },
        { id: 3, text1: 'Box 3 Text 1', text2: 'Box 3 Text 2' },
        { id: 4, text1: 'Box 4 Text 1', text2: 'Box 4 Text 2' },
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
