import React, { useState, useEffect } from 'react';
import { useBoxes } from '../contexts/BoxesContext';

const Sidebar = () => {
    const { boxes, setBoxes, boxFontSizes, setBoxFontSizes, selectedBoxId, setSelectedBoxId} = useBoxes();
    const [titleInputValue, setTitleInputValue] = useState(boxes[0].text1);
    const [descriptionInputValue, setDescriptionInputValue] = useState(boxes[0].text2);

    useEffect(() => {
        const selectedBox = boxes.find(box => box.id === selectedBoxId);
        if (selectedBox) {
            setTitleInputValue(selectedBox.text1 || '');
            setDescriptionInputValue(selectedBox.text2 || '');
        }
    }, [selectedBoxId, boxes]);

    useEffect(() => {
        const titleInput = document.getElementById('titleInput');
        const descriptionInput = document.getElementById('descriptionInput');

        if (titleInput) {
            titleInput.focus();
        }

        if (descriptionInput) {
            descriptionInput.focus();
        }
    }, [selectedBoxId]);

    const handleBoxButtonClick = (id) => {
        setSelectedBoxId(id);
    };


    const handleTitleInputChange = (e) => {
        setTitleInputValue(e.target.value);
        if (selectedBoxId !== null) {
            const updatedBoxes = boxes.map(box =>
                box.id === selectedBoxId ? { ...box, text1: e.target.value } : box
            );
            setBoxes(updatedBoxes);
        }
    };

    const handleDescriptionInputChange = (e) => {
        setDescriptionInputValue(e.target.value);
        if (selectedBoxId !== null) {
            const updatedBoxes = boxes.map(box =>
                box.id === selectedBoxId ? { ...box, text2: e.target.value } : box
            );
            setBoxes(updatedBoxes);
        }
    };

    const handleTitleFontSizeChange = (e) => {
        const newFontSizes = { ...boxFontSizes };
        newFontSizes[selectedBoxId].titleFontSize = Number(e.target.value);
        setBoxFontSizes(newFontSizes);
    };

    const handleDescriptionFontSizeChange = (e) => {
        const newFontSizes = { ...boxFontSizes };
        newFontSizes[selectedBoxId].descriptionFontSize = Number(e.target.value);
        setBoxFontSizes(newFontSizes);
    };

  
    return (
        <div className="w-full lg:w-64 bg-gray-600 p-4"  >
            <div className="space-y-2 mb-4">
                {boxes.map((box) => (
                    <button
                        key={box.id}
                        className={`w-full text-left p-2 rounded  ${selectedBoxId === box.id ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300'}`}
                        onClick={() => handleBoxButtonClick(box.id)}
                    >
                        {`Box ${box.id}`}
                    </button>
                ))}
            </div>
            {selectedBoxId !== null && (
                <div className="space-y-4">
                    <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-300 mb-1">Title content</label>
                        <input
                            type="text"
                            value={titleInputValue}
                            onChange={handleTitleInputChange}
                            className="w-full p-2 bg-gray-700 text-white rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-300 mb-1">Title size</label>
                        <input
                            id="titleInput"
                            type="range"
                            min="10"
                            max="30"
                            value={boxFontSizes[selectedBoxId].titleFontSize}
                            onChange={handleTitleFontSizeChange}
                            className="w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-300 mb-1">Description content</label>
                        <input
                            id="descriptionInput"
                            type="text"
                            value={descriptionInputValue}
                            onChange={handleDescriptionInputChange}
                            className="w-full p-2 bg-gray-700 text-white rounded"

                        />
                    </div>
                    <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-300 mb-1">Description size</label>
                        <input
                            type="range"
                            min="10"
                            max="30"
                            value={boxFontSizes[selectedBoxId].descriptionFontSize}
                            onChange={handleDescriptionFontSizeChange}
                            className="w-full"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Sidebar;
