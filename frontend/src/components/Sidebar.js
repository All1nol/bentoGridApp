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
        <div className="sidebar p-4 bg-white border-r border-gray-200 w-72"  >
            <div className="tabs flex  flex-col gap-2 mb-4">
                {boxes.map((box) => (
                    <button
                        key={box.id}
                        className={`tab ${selectedBoxId === box.id ? 'active' : ''}`}
                        onClick={() => handleBoxButtonClick(box.id)}
                    >
                        {`Box ${box.id}`}
                    </button>
                ))}
            </div>
            {selectedBoxId !== null && (
                <div className="controls space-y-4">
                    <div className="control-group">
                        <label  className="block text-sm font-medium text-gray-700" >Title content</label>
                        <input
                            type="text"
                            value={titleInputValue}
                            onChange={handleTitleInputChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                    </div>
                    <div className="control-group">
                        <label className="block text-sm font-medium text-gray-700">Title size</label>
                        <input
                            id="titleInput"
                            type="range"
                            min="10"
                            max="30"
                            value={boxFontSizes[selectedBoxId].titleFontSize}
                            onChange={handleTitleFontSizeChange}
                            className="mt-1 w-full"
                        />
                    </div>
                    <div className="control-group">
                        <label className="block text-sm font-medium text-gray-700">Description content</label>
                        <input
                            id="descriptionInput"
                            type="text"
                            value={descriptionInputValue}
                            onChange={handleDescriptionInputChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"

                        />
                    </div>
                    <div className="control-group">
                        <label className="block text-sm font-medium text-gray-700">Description size</label>
                        <input
                            type="range"
                            min="10"
                            max="30"
                            value={boxFontSizes[selectedBoxId].descriptionFontSize}
                            onChange={handleDescriptionFontSizeChange}
                            className="mt-1 w-full"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Sidebar;
