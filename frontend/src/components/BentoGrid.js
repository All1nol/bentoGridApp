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
        <div className="flex-1 p-4">
            <button 
                onClick={handleExport} 
                className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            >
                Export as JPG
            </button>
            <div className="flex flex-wrap justify-center gap-4" style={{ maxWidth: '600px' }}>
                {boxes && boxes.length > 0 ? (
                    boxes.map((box, index) => (
                        <div 
                            key={box.id} 
                            className={`bg-gray-200 border border-gray-300 rounded-lg p-4 cursor-pointer flex flex-col justify-center items-center text-center shadow-md hover:shadow-lg transition duration-300 ease-in-out box-${index + 1}`}
                            style={{ 
                                fontSize: boxFontSizes[box.id]?.titleFontSize || '1em',
                            }}
                        >
                            <h2 
                                style={{ fontSize: boxFontSizes[box.id]?.titleFontSize || '1em' }} 
                                onClick={() => handleClick(box.id)} 
                                className="text-lg font-bold mb-2 text-blue-900 hover:text-blue-700"
                            >
                                {box.text1}
                            </h2>
                            <p 
                                style={{ fontSize: boxFontSizes[box.id]?.descriptionFontSize || '1em' }} 
                                onClick={() => handleClick(box.id)} 
                                className="text-base text-gray-700 hover:text-gray-900"
                            >
                                {box.text2}
                            </p>
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
