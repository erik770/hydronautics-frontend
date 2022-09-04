import React from 'react';
import classes from './Waiting.module.scss';
import {Link} from "react-router-dom";

export const Waiting = () => {
    return (
        <div id='/not_done' className={classes['error-wrapper']}>
            <div className={classes.error}>
                <div className={classes.error__numbers}>
                    <span>4</span>
                    <span className={['far', 'fa-question-circle', 'fa-spin', classes['zero-spin']].join(' ')}></span>
                    <span>4</span>
                </div>
                <div className={classes.error__text}>Упсии, данный раздел разработчики пока не сделали.</div>
            </div>
        </div>
    );
};
