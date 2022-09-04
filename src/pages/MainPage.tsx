import React from 'react';
import {Carousel} from "../components/Carousel/Carousel";
import {CarouselItems} from "../const/CarouselItems";
import {Team} from "../components/Team/Team";
import {TeamMembers} from "../const/TeamMembers";
import {Waiting} from "../components/Waiting/Waiting";

const MainPage = () => {
    return (
        <>
            <Carousel slides={CarouselItems}/>
            <Team members ={TeamMembers}/>
            <Waiting />
        </>
    );
};

export default MainPage;
