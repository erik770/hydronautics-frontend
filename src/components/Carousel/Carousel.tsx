import React, {FC, useState} from 'react';
import {ICarouselItem} from "../../types/Types";
import classes from './Carousel.module.scss';
import right_arrow from '../../img/Carousel/right_arrow.png';
import left_arrow from '../../img/Carousel/left_arrow.png';
import {useSwipe} from "../../hooks/useSwipe";

interface CarouselProps {
    slides: ICarouselItem[]
}

export const Carousel: FC<CarouselProps> = ({slides}) => {
    const [current, setCurrent] = useState<number>(0);
    const slidesLength = slides.length;

    const nextSlide = () => setCurrent(current === slidesLength - 1 ? 0 : current + 1);
    const prevSlide = () => setCurrent(current === 0 ? slidesLength - 1 : current - 1);

    const [onTouchStart, onTouchMove, onTouchEnd] = useSwipe(80, nextSlide, prevSlide);

    return (
        <div className={classes['carousel']} onTouchEnd={onTouchEnd} onTouchStart={onTouchStart}
             onTouchMove={onTouchMove}>
            <div className={classes['carousel__items-container']}>
                {slides.map((item, index) => {
                    return (

                        <div
                            className={
                                current === index
                                    ? [classes.carousel__item, classes.carousel__item_active].join(' ')
                                    : classes.carousel__item}
                        >
                            {current === index && <img className={classes.carousel__image} src={item.imgUrl} alt=""/>}

                        </div>
                    )

                })}
                <div className={classes.carousel__text}>{slides[current].title} <a href={'#'}>подробнее</a></div>
            </div>
            <div className={classes.carousel__arrows}>
                <img onClick={prevSlide} src={left_arrow}></img>
                <img onClick={nextSlide} src={right_arrow}></img>
            </div>
        </div>

    );
};