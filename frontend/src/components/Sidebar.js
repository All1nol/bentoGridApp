import React, { useState } from 'react';
import BentoGrid from './BentoGrid'; 
import useBoxes from '../hooks/useBoxState';

const Sidebar = () => {
    const { boxes, setBoxes, boxFontSizes, setBoxFontSizes } = useBoxes();
    const [selectedBoxId, setSelectedBoxId] = useState(null);
    const [titleInputValue, setTitleInputValue] = useState(''); 
    const [descriptionInputValue, setDescriptionInputValue] = useState(''); 

    const handleBoxButtonClick = (id) => {
        setSelectedBoxId(id);

        const selectedBox = boxes.find(box => box.id === id);
        if (selectedBox) {
            setTitleInputValue(selectedBox.title || '');
            setDescriptionInputValue(selectedBox.description || '');
        } else {
            setTitleInputValue('');
            setDescriptionInputValue('');
        }
    };

    const handleTitleInputChange = (e) => {
        setTitleInputValue(e.target.value);
        if (selectedBoxId !== null) {
            const updatedBoxes = boxes.map(box =>
                box.id === selectedBoxId ? { ...box, title: e.target.value } : box
            );
            setBoxes(updatedBoxes); 
        }
    };

    const handleDescriptionInputChange = (e) => {
        setDescriptionInputValue(e.target.value);
        if (selectedBoxId !== null) {
            const updatedBoxes = boxes.map(box =>
                box.id === selectedBoxId ? { ...box, description: e.target.value } : box
            );
            setBoxes(updatedBoxes);
        }
    };

    const handleTitleFontSizeChange = (e) => {
        setTitleInputValue(e.target.value);
        if (selectedBoxId !== null) {
            const newFontSizes = { ...boxFontSizes };
            newFontSizes[selectedBoxId].titleFontSize = Number(e.target.value);
            setBoxFontSizes(newFontSizes);
        }
    };

    const handleDescriptionFontSizeChange = (e) => {
        setDescriptionInputValue(e.target.value);
        if (selectedBoxId !== null) {
            const newFontSizes = { ...boxFontSizes };
            newFontSizes[selectedBoxId].descriptionFontSize = Number(e.target.value);
            setBoxFontSizes(newFontSizes);
        }
    };

    return (
        <div className="bg-gray-200 p-4">
            <div className="mt-4">
                <button onClick={() => handleBoxButtonClick(1)}>Edit Box 1</button>
                <button onClick={() => handleBoxButtonClick(2)}>Edit Box 2</button>
                <button onClick={() => handleBoxButtonClick(3)}>Edit Box 3</button>
                <button onClick={() => handleBoxButtonClick(4)}>Edit Box 4</button>
            </div>
            {selectedBoxId !== null && (
                <div className="mt-4">
                    <input
                        type="text"
                        value={titleInputValue}
                        onChange={handleTitleInputChange}
                        className="w-full border border-gray-400 rounded-md p-2 mb-2"
                        placeholder="Title"
                    />
                    <input
                        type="text"
                        value={descriptionInputValue}
                        onChange={handleDescriptionInputChange}
                        className="w-full border border-gray-400 rounded-md p-2 mb-2"
                        placeholder="Description"
                    />
                    <div className="mt-2">
                        <label htmlFor="titleFontSize">Title Font Size: {boxFontSizes[selectedBoxId].titleFontSize}px</label>
                        <input
                            type="range"
                            id="titleFontSize"
                            min="10"
                            max="30"
                            value={boxFontSizes[selectedBoxId].titleFontSize}
                            onChange={handleTitleFontSizeChange} 
                        />
                    </div>
                    <div className="mt-2">
                        <label htmlFor="descriptionFontSize">Description Font Size: {boxFontSizes[selectedBoxId].descriptionFontSize}px</label>
                        <input
                            type="range"
                            id="descriptionFontSize"
                            min="10"
                            max="30"
                            value={boxFontSizes[selectedBoxId].descriptionFontSize}
                            onChange={handleDescriptionFontSizeChange} 
                        />
                    </div>
                    <BentoGrid
                        boxes={boxes}
                        titleFontSize={boxFontSizes[selectedBoxId].titleFontSize}
                        descriptionFontSize={boxFontSizes[selectedBoxId].descriptionFontSize}
                        boxFontSizes={boxFontSizes} 
                    />
                </div>
            )}
        </div>
    );
};

export default Sidebar;
