import { Routes, Route, Link } from 'react-router-dom';
import { Suspense } from 'react';
import './styles/index.scss';
import { useTheme } from './providers/ThemeProvider';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { classNames } from 'shared/lib';

const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Toggle</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path={'/'} element={<MainPage />}/>
                <Route path={'/about'} element={<AboutPage />}/>
            </Routes>
            </Suspense>
        </div>
    )
}

export default App;