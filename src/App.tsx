import { Routes, Route, Link } from 'react-router-dom';
import { Suspense } from 'react';
import { Counter } from './components';
import './index.scss';
import  MainPage  from "./pages/MainPage/MainPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import { MainPageAsync } from './pages/MainPage/MainPageAsync';
import { AboutPageAsync } from './pages/AboutPage/AboutPageAsync';

const App = () => {
    return (
        <div className="app">
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path={'/'} element={<MainPageAsync/>}/>
                <Route path={'/about'} element={<AboutPageAsync/>}/>
            </Routes>
            </Suspense>
        </div>
    )
}

export default App;