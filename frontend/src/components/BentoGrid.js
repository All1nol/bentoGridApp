import React from 'react';
import useBoxState from '../hooks/useBoxState';

const BentoGrid = () => {
    const { boxes } = useBoxState();

    return (
        <div className="container mx-auto mt-8">
            <h2 className="text-2xl font-bold">Bento Grids</h2>
            <div className="grid grid-cols-2 gap-4 mt-4">
                {boxes.map(box => (
                    <div key={box.id} className="bg-gray-200 p-4">
                        <div className="mt-2">
                            <strong>{box.text1}</strong> - {box.text2}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BentoGrid;
