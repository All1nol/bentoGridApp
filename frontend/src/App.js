import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import BentoGrid from './components/BentoGrid';
import { useBoxes, BoxesProvider } from './contexts/BoxesContext';
import './styles/App.css';

const AppContent = () => {
    const { boxes, boxFontSizes } = useBoxes();

    const handleBoxClick = (id) => {
        const clickedBox = boxes.find((box) => box.id === id);
    
        if (clickedBox) {
            console.log(`Box ${clickedBox.id} clicked: ${clickedBox.text1}`);
        } else {
            console.log(`Box with id ${id} not found.`);
        }
    };
    
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
                    </div>
                </div>
            </div>
        </BoxesProvider>
    );
};

export default App;
