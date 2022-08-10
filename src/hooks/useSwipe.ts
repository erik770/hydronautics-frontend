import {TouchEvent, useState} from "react";

export const useSwipe = (minSwipeDistance: number, swipeLeftHandler: () => void, swipeRightHandler: () => void): [
        ((e: TouchEvent) => void),
        ((e: TouchEvent) => void),
        (() => any)] => {
    const [touchStart, setTouchStart] = useState<null | number>(null);
    const [touchEnd, setTouchEnd] = useState<null | number>(null);

    const onTouchStart = (e: TouchEvent) => {
        setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
        setTouchStart(e.targetTouches[0].clientX);
    }

    const onTouchMove = (e: TouchEvent) => setTouchEnd(e.targetTouches[0].clientX);

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) {
            return
        }
        const distance = touchStart - touchEnd
        const isLeftSwipe = distance > minSwipeDistance
        const isRightSwipe = distance < -minSwipeDistance
        if (isLeftSwipe) {
            swipeLeftHandler();
        }
        if (isRightSwipe) {
            swipeRightHandler();
        }
    }

    return [onTouchStart, onTouchMove, onTouchEnd];
}