import React from 'react';
import NavigationItems from '../Navigation/NavigationItems/NavigationItems';
import classes from './Toolbar.module.css';

const toolbar = (props) => (
    <div className={classes.Toolbar}>
        <NavigationItems>
        </NavigationItems>
    </div>
)

export default toolbar;


