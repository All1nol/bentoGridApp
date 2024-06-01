import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import BentoGrid from './components/BentoGrid';
import { useBoxes, BoxesProvider } from './contexts/BoxesContext';
import './styles/App.css';

const AppContent = () => {
    const { boxes, boxFontSizes, handleBoxClick } = useBoxes();
    return <BentoGrid boxes={boxes} boxFontSizes={boxFontSizes} handleBoxClick={handleBoxClick}/>;
};

const App = () => {
    return (
        <BoxesProvider>
            <div className="app-container">
                <Header />
                <div className="main-content">
                    <Sidebar />
                    <div className="bento-grid-container">
                        <AppContent />
                        "FAsfs"
                    </div>
                </div>
            </div>
        </BoxesProvider>
    );
};

export default App;
