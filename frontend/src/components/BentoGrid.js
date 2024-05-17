import React, { useEffect, useRef } from 'react';
import html2canvas from 'html2canvas';

const BentoGrid = ({ boxes, boxFontSizes, handleBoxClick }) => {
    const gridRef = useRef();

    useEffect(() => {
        console.log('boxFontSizes prop changed:', boxFontSizes);
    }, [boxFontSizes]);

    const handleClick = (id) => {
        handleBoxClick(id);
    };

    const handleExport = async () => {
        if (gridRef.current) {
            const canvas = await html2canvas(gridRef.current);
            const link = document.createElement('a');
            link.href = canvas.toDataURL('image/jpeg');
            link.download = 'bento-grid.jpg';
            link.click();
        }
    };

    return (
        <div className="bento-grid-container">
            <button onClick={handleExport}>Export as JPG</button>
            <div className="bento-grid" ref={gridRef}>
                {boxes && boxes.length > 0 ? (
                    boxes.map(box => (
                        <div key={box.id} className="box" style={{ fontSize: boxFontSizes[box.id].titleFontSize }}>
                            <h2 style={{ fontSize: boxFontSizes[box.id].titleFontSize }} onClick={() => handleClick(box.id)}>{box.text1}</h2>
                            <p style={{ fontSize: boxFontSizes[box.id].descriptionFontSize }} onClick={() => handleClick(box.id)}>{box.text2}</p>
                        </div>
                    ))
                ) : (
                    <p>No boxes to display</p>
                )}
            </div>
        </div>
    );
};

export default BentoGrid;
