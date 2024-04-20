import React from 'react';
import useBoxState from '../hooks/useBoxState';

const Sidebar = () => {
    const { boxes, setBoxes } = useBoxState();

    const handleInputChange = (e, id, field) => {
        const updatedBoxes = boxes.map(box =>
            box.id === id ? { ...box, [field]: e.target.value } : box
        );
        setBoxes(updatedBoxes);
    };

    return (
        <div className="bg-gray-200 p-4">
            {boxes.map(box => (
                <div key={box.id}>
                    <input
                        type="text"
                        value={box.text1}
                        onChange={(e) => handleInputChange(e, box.id, 'text1')}
                        className="w-full border border-gray-400 rounded-md p-2 mb-2"
                    />
                    <input
                        type="text"
                        value={box.text2}
                        onChange={(e) => handleInputChange(e, box.id, 'text2')}
                        className="w-full border border-gray-400 rounded-md p-2 mb-4"
                    />
                </div>
            ))}
        </div>
    );
};

export default Sidebar;
