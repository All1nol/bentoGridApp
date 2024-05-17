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

    // Automatically focus on the inputs when selectedBoxId changes
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
        <div className="sidebar">
            <div className="tabs">
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
                <div className="controls">
                    <div className="control-group">
                        <label>Title content</label>
                        <input
                            type="text"
                            value={titleInputValue}
                            onChange={handleTitleInputChange}
                            className="input"
                        />
                    </div>
                    <div className="control-group">
                        <label>Title size</label>
                        <input
                            id="titleInput"
                            type="range"
                            min="10"
                            max="30"
                            value={boxFontSizes[selectedBoxId].titleFontSize}
                            onChange={handleTitleFontSizeChange}
                        />
                    </div>
                    <div className="control-group">
                        <label>Description content</label>
                        <input
                            id="descriptionInput"
                            type="text"
                            value={descriptionInputValue}
                            onChange={handleDescriptionInputChange}
                            className="input"
                        />
                    </div>
                    <div className="control-group">
                        <label>Description size</label>
                        <input
                            type="range"
                            min="10"
                            max="30"
                            value={boxFontSizes[selectedBoxId].descriptionFontSize}
                            onChange={handleDescriptionFontSizeChange}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Sidebar;
