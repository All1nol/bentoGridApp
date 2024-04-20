import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import BentoGrid from './components/BentoGrid';
import { BoxesProvider } from './contexts/BoxesContext';

const App = () => {
    return (
        <BoxesProvider>
            <div>
                <Header />
                <div className="flex mt-8">
                    <Sidebar />
                    <BentoGrid />
                </div>
            </div>
        </BoxesProvider>
    );
};

export default App;
