import { useState } from 'react';
import reactLogo from './assets/react.svg';
import MainLayout from '@components/Layout';
import MyHeader from '@components/Header/Header';
import MyFooter from '@components/Footer/Footer';
import Button from '@components/Button/Button';

function App() {
    return (
        <>
            <MainLayout>
                <MyHeader />
                content
                <MyFooter />
                <Button />
            </MainLayout>
        </>
    );
}

export default App;
