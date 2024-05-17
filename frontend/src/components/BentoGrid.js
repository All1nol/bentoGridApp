import React, { useEffect } from 'react';
// import './BentoGrid.css';
import {handleBoxClick} from '/.'
import Sidebar from './Sidebar';
const BentoGrid = ({ boxes, boxFontSizes , handleBoxClick}) => {
    useEffect(() => {
        console.log('boxFontSizes prop changed:', boxFontSizes);
    }, [boxFontSizes]);

    const handleClick = (id) => {
        handleBoxClick(id);

        const titleInput = document.getElementById('titleInput')
        const descriptionInput = document.getElementById('descriptionInput')

        if(titleInput){
            titleInput.focus();
        }

        if(descriptionInput){
            descriptionInput.focus();
        }

    };
    return (
        <div className="bento-grid">
            {boxes && boxes.length > 0 ? (
                boxes.map(box => (
                    <div key={box.id} className="box" style={{ fontSize: boxFontSizes[box.id].titleFontSize }}>
                        <h2 style={{ fontSize: boxFontSizes[box.id].titleFontSize }} onClick={() => handleClick(box.id)}  >{box.text1}</h2>
                        <p style={{ fontSize: boxFontSizes[box.id].descriptionFontSize }} onClick={() => handleClick(box.id)} >{box.text2}</p>
                    </div>
                ))
            ) : (
                <p>No boxes to display</p>
            )}
        </div>
    );
};

export default BentoGrid;
