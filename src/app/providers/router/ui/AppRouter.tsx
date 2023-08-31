import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';

const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path={routeConfig.main.path} element={<MainPage />} />
                <Route path={routeConfig.about.path} element={<AboutPage />} />
            </Routes>
            </Suspense>
    );
};

export default AppRouter;