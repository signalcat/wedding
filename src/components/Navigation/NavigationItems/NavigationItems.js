import React from 'react';
import NavigationItem from '../NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>HomePage</NavigationItem>
        <NavigationItem link="/Gallery">Photos</NavigationItem>
        <NavigationItem link="/RsvpPage">RSVP</NavigationItem>
        <NavigationItem link="RegistryPage">Registry</NavigationItem>
    </ul>
);

export default navigationItems;
