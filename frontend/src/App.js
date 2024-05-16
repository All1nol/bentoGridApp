import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import BentoGrid from './components/BentoGrid';
import { useBoxes, BoxesProvider } from './contexts/BoxesContext';
// import './App.css';

const AppContent = () => {
    const { boxes, boxFontSizes } = useBoxes();
    return <BentoGrid boxes={boxes} boxFontSizes={boxFontSizes} />;
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
                    </div>
                </div>
            </div>
        </BoxesProvider>
    );
};

export default App;
