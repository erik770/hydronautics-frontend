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
                <div className={classes.error__text}>Maybe this page moved? Got deleted? Is hiding out in quarantine?
                    Never existed in
                    the first
                    place?<p>Let's go <Link to="/posts">home</Link> and try from there.</p></div>
            </div>
        </div>
    );
};
