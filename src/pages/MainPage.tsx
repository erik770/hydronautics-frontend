import React from 'react';
import {Carousel} from "../components/Carousel/Carousel";
import {CarouselItems} from "../const/CarouselItems";
import {Team} from "../components/Team/Team";
import {TeamMembers} from "../const/TeamMembers";

const MainPage = () => {
    return (
        <>
            <Carousel slides={CarouselItems}/>
            <Team members ={TeamMembers}/>
        </>
    );
};

export default MainPage;
