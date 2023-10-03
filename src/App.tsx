import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Step from './components/Step';
import ThankYou from './components/ThankYou';
import Home from './pages/Home';
import MainLayout from './template/MainLayout';
import Container from './ui/atoms/Container';
import { withMediaQueries } from './ui/hoc/withMediaQueries';
import { MainContainer } from './utils/styles/style';

function App() {

    return (
        <MainLayout>
            <Home />
        </MainLayout>
    );
}

export default App;
