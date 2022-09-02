import React, {FC} from 'react';
import classes from './Team.module.scss';
import {ITeamMember} from "../../types/Types";
import {TeamMember} from "../TeamMember/TeamMember";

interface TeamProps {
    members: ITeamMember[],
}

export const Team: FC<TeamProps> = ({members}) => {
    console.log(members);
    return (
        <div id='/team' className={classes['team-container']}>
            <>
                <h1 className={classes.team__header}>Команда</h1>
                <div className={classes.team__members}>

                    {members.map((member) =>
                        <TeamMember key={member.imgUrl}
                                    name={member.name}
                                    surname={member.surname}
                                    imgUrl={member.imgUrl}
                                    role={member.role}
                                    text={member.text}/>
                    )}
                </div>
            </>
        </div>
    );
};
