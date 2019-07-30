import React, { Component } from 'react';
import Aux from '../Aux/Aux';
import Toolbar from '../../components/Toolbar/Toolbar';

export default class Layout extends Component {
    render() {
        return(
            <Aux>
                <Toolbar>
                </Toolbar>
                <main>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}
