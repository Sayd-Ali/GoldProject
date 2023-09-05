import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';

const AppRouter = () => (
    <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            <Route
                path={routeConfig.main.path}
                element={(
                    <div
                        className="page-wrapper"
                    >
                        <MainPage />
                    </div>
                )}
            />
            <Route
                path={routeConfig.about.path}
                element={(
                    <div
                        className="page-wrapper"
                    >
                        <AboutPage />
                    </div>
                )}
            />
        </Routes>
    </Suspense>
);

export default AppRouter;