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
            <div className="app-container flex flex-col h-screen">
                <Header />
                <div className="main-content flex flex-1 overflow-hidden">
                    <Sidebar />
                    <div className="bento-grid-container flex-1 p-4 overflow-y-auto">
                        <AppContent />
                    </div>
                </div>
            </div>
        </BoxesProvider>
    );
};

export default App;
