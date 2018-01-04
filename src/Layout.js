import React, {Component} from 'react'
import {Transition, Container, TitleBar, Button, Sheet, Panel} from '@extjs/ext-react';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom'
import {medium, large} from './responsiveFormulas';
import Home from './Home/Home';
import About from './About/About';
import NavMenu from './NavMenu';

/**
 * The main application view and routes
 */
class Layout extends Component {
    render() {
        return (
            <Container layout="hbox" fullscreen>
                <TitleBar docked="top" shadow style={{zIndex: 2}}>
                    <Button
                        align="left"
                        iconCls="x-fa fa-bars"
                        // handler={actions.toggleTree}
                    />
                    {/*<div className="ext ext-sencha" style={{margin: '0 5px 0 7px', fontSize: '20px', width: '20px'}} />*/}
                    <a href="#" className="app-title">ЄРАУ - Єдиний Реєстр Адвокатів Україниbeta 2.0</a>
                </TitleBar>
            </Container>
        );
    };
}

// export default withRouter(Layout);
export default Layout;