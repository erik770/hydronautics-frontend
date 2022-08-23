import React, {FC} from 'react';
import classes from './Team.module.scss';

const Team: FC<any> = ({members}) => {
    return (
        <div id='/team' className={classes['team-container']}>
            <h1 className={classes.team__header}>Команда</h1>
        </div>
    );
};

export default Team;