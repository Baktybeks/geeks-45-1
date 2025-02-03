import React from 'react';
import classes from './Footer.module.css';
import Title from '../Title';


export const Footer = () => {
    return (
        <div><Title title={'Footer'}/></div>
    );
};

export const Footer2 = () => {
    return (
        <div className={classes.footer}>
            <Title title={'Footer2'}/>
        </div>
    );
};
