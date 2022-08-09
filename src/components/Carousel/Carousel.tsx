import React, {FC, useEffect, useState} from 'react';
import {ICarouselItem} from "../../types/Types";
import classes from './Carousel.module.scss';
import right_arrow from '../../img/Carousel/right_arrow.png';
import left_arrow from '../../img/Carousel/left_arrow.png';

interface CarouselProps {
    slides: ICarouselItem[]
}


const Carousel: FC<CarouselProps> = ({slides}) => {
    const [current, setCurrent] = useState<number>(0);
    const slidesLength = slides.length;

    const nextSlide = () => setCurrent(current === slidesLength - 1 ? 0 : current + 1);
    const prevSlide = () => setCurrent(current === 0 ? slidesLength - 1 : current - 1);

    const slideClasses = [classes.carousel__item];

    return (
        <div className={classes['carousel']}>
                <div className={classes['carousel__items-container']}>
                    {slides.map((item, index) => {
                        return (

                            <div
                                className={
                                    current === index
                                        ? [classes.carousel__item, classes.carousel__item_active].join(' ')
                                        : classes.carousel__item}
                            >
                                {current === index && (
                                    <>
                                        <img className={classes.carousel__image} src={item.imgUrl} alt=""/>
                                    </>
                                )}
                                <div className={classes.carousel__text}>{item.title} <a href={'#'}>подробнее</a></div>
                            </div>
                        )

                    })}
                </div>
            <div className={classes.carousel__arrows}>
                <img onClick={prevSlide} src={left_arrow}></img>
                <img onClick={nextSlide} src={right_arrow}></img>
            </div>
            </div>

    );
};

export default Carousel;