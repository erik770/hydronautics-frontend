import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Carousel} from "./components/Carousel/Carousel";
import {CarouselItems} from "./const/CarouselItems";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Carousel slides={CarouselItems}/>
        </div>
    );
}

export default App;
