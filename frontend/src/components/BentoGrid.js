import React, { useEffect } from 'react';
// import './BentoGrid.css';

const BentoGrid = ({ boxes, boxFontSizes }) => {
    useEffect(() => {
        console.log('boxFontSizes prop changed:', boxFontSizes);
    }, [boxFontSizes]);

    return (
        <div className="bento-grid">
            {boxes && boxes.length > 0 ? (
                boxes.map(box => (
                    <div key={box.id} className="box" style={{ fontSize: boxFontSizes[box.id].titleFontSize }}>
                        <h2 style={{ fontSize: boxFontSizes[box.id].titleFontSize }}>{box.text1}</h2>
                        <p style={{ fontSize: boxFontSizes[box.id].descriptionFontSize }}>{box.text2}</p>
                    </div>
                ))
            ) : (
                <p>No boxes to display</p>
            )}
        </div>
    );
};

export default BentoGrid;
