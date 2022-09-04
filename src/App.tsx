import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Carousel} from "./components/Carousel/Carousel";
import {Waiting} from "./components/Waiting/Waiting";
import {CarouselItems} from "./const/CarouselItems";
import {BrowserRouter} from "react-router-dom";
import {Team} from "./components/Team/Team";
import {TeamMembers} from "./const/TeamMembers";
import AppRouter from "./components/AppRouter";

function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <AppRouter/>
        </BrowserRouter>
    );
}

export default App;
