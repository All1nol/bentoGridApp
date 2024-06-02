import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import BentoGrid from './components/BentoGrid';
import { useBoxes, BoxesProvider } from './contexts/BoxesContext';

const AppContent = () => {
    const { boxes, boxFontSizes, handleBoxClick } = useBoxes();
    return <BentoGrid boxes={boxes} boxFontSizes={boxFontSizes} handleBoxClick={handleBoxClick}/>;
};

const App = () => {
    return (
        <BoxesProvider>
            <div className="flex flex-col min-h-screen bg-gray-900 text-black">
                <Header />
                <div className="flex flex-grow flex-col lg:flex-row">
                    <Sidebar />
                    <div className="flex-grow p-4">
                        <AppContent />
                    </div>
                </div>
            </div>
        </BoxesProvider>
    );
};

export default App;
