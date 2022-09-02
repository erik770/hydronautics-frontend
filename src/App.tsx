import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Carousel} from "./components/Carousel/Carousel";
import {Waiting} from "./components/Waiting/Waiting";
import {CarouselItems} from "./const/CarouselItems";
import {BrowserRouter} from "react-router-dom";
import {Team} from "./components/Team/Team";
import {TeamMembers} from "./const/TeamMembers";

function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <Carousel slides={CarouselItems}/>
            <Team members ={TeamMembers}/>
            <Waiting />
        </BrowserRouter>
    );
}

export default App;
