import React, {FC} from 'react';
import {ITeamMember} from "../../types/Types";
import classes from "./TeamMember.module.scss";

export const TeamMember: FC<ITeamMember> = ({name, surname, role, imgUrl, text}) => {
    return (
        <div className={classes.member}>
            <img className={classes.member__image} src={imgUrl} alt=""/>
            <div className={classes.member__name}>{name}</div>
            <div className={classes.member__surname}>{surname}</div>
            <div className={classes.member__role}>{role}</div>
            <div className={classes.member__text}>{text}</div>
        </div>
    );
};
