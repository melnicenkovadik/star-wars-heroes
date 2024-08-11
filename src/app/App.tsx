import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CharacterDetailsPage from '../pages/CharacterDetailsPage';
import CharacterPage from '../pages/CharacterPage';
import Footer from '../widgets/Footer';
import Header from '../widgets/Header';

export const App: React.FC = () => {
    return (
        <Router>
            <Header />
            <div style={{ padding: '20px' }}>
                <Routes>
                    <Route path="/" element={<CharacterPage />} />
                    <Route path="/character/:id" element={<CharacterDetailsPage />} />
                </Routes>
            </div>
            <Footer />
        </Router>
    );
};
