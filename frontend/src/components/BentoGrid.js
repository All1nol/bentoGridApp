import React from 'react';

const BentoGrid = ({ boxes, titleFontSize, descriptionFontSize, boxFontSizes }) => {
    return (
        <div className="bento-grid">
            {boxes && boxes.length > 0 ? (
                boxes.map(box => (
                    <div key={box.id} style={{ fontSize: boxFontSizes && boxFontSizes[box.id]?.titleFontSize }}>
                        <h2>{box.title}</h2>
                        <p style={{ fontSize: boxFontSizes && boxFontSizes[box.id]?.descriptionFontSize }}>{box.description}</p>
                    </div>
                ))
            ) : (
                <p>No boxes to display</p>
            )}
        </div>
    );
};

export default BentoGrid;
