import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutUs from './routes/AboutUs';
import Contact from './routes/Contact';
import Receiver from './routes/Receiver';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path={"/about-us"} element={<AboutUs/>}/>
                <Route path={"/contact"} element={<Contact/>}/>
                <Route path={"/"} element={<App/>}/>
                <Route path={"receivers/:receiverId"} element={<Receiver/>}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
