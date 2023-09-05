import React, { Suspense } from 'react';
import { classNames } from 'shared/lib';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { AppRouter } from './providers/router';
import { useTheme } from './providers/ThemeProvider';
import './styles/index.scss';

function App() {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>

    );
}

export default App;
