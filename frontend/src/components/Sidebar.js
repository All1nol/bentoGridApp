import React, { useState } from 'react';
import useBoxes from '../hooks/useBoxState';

const Sidebar = () => {
    const { boxes, setBoxes } = useBoxes();
    const [selectedBoxId, setSelectedBoxId] = useState(null);

    const handleBoxButtonClick = (id) => {
        setSelectedBoxId(id); 
    };

    const handleTitleInputChange = (e) => {
        if (selectedBoxId !== null) {
            const updatedBoxes = boxes.map(box =>
                box.id === selectedBoxId ? { ...box, title: e.target.value } : box
            );
            setBoxes(updatedBoxes); 
        }
    };

    const handleDescriptionInputChange = (e) => {
        if (selectedBoxId !== null) {
            const updatedBoxes = boxes.map(box =>
                box.id === selectedBoxId ? { ...box, description: e.target.value } : box
            );
            setBoxes(updatedBoxes);
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
                        value={boxes.find(box => box.id === selectedBoxId)?.title || ''}
                        onChange={handleTitleInputChange}
                        className="w-full border border-gray-400 rounded-md p-2 mb-2"
                        placeholder="Title"
                    />
                    <input
                        value={boxes.find(box => box.id === selectedBoxId)?.description || ''}
                        onChange={handleDescriptionInputChange}
                        className="w-full border border-gray-400 rounded-md p-2 mb-2"
                        placeholder="Description"
                    ></input>
                </div>
            )}
        </div>
    );
};

export default Sidebar;
