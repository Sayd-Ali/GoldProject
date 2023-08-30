import { Routes, Route, Link } from 'react-router-dom';
import { Suspense } from 'react';
import './styles/index.scss';
import { useTheme } from './providers/ThemeProvider';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { classNames } from 'shared/lib';
import { AppRouter } from './router';

const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Toggle</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <AppRouter />
        </div>
    )
}

export default App;