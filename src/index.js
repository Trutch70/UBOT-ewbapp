import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Businesses from './components/Businesses/Businesses';

const MainPage = React.lazy(() => import('./components/MainPage/MainPage'));
const AboutUs = React.lazy(() => import('./components/AboutUs/AboutUs'));
const Contact = React.lazy(() => import('./components/Contact/Contact'));
const NotFound = React.lazy(() => import('./components/NotFound/NotFound'));
const Receiver = React.lazy(() => import('./components/Receiver/Receiver'));

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App>
                <Suspense fallback={<p>Loading...</p>}>
                    <Routes>
                        <Route path={"/"} element={<MainPage/>}/>
                        <Route path={"/about-us"} element={<AboutUs/>}/>
                        <Route path={"/contact"} element={<Contact/>}/>
                        <Route path={"/businesses"} element={<Businesses/>}/>
                        <Route path={"businesses/:receiverId"} element={<Receiver/>}/>
                        <Route path={"*"} element={<NotFound/>}/>
                    </Routes>
                </Suspense>
            </App>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
