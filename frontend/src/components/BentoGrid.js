import React from 'react';
import useBoxes from '../hooks/useBoxState';

const BentoGrid = () => {
    const { boxes } = useBoxes();

    return (
        <div className="container mx-auto mt-8">
            <h2 className="text-2xl font-bold">Bento Grids</h2>
            <div className="grid grid-cols-2 gap-4 mt-4">
                {boxes.map(box => (
                    <div key={box.id} className="bg-gray-200 p-4">
                        <h3 className="text-lg font-semibold">{box.title}</h3>
                        <p>{box.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BentoGrid;
