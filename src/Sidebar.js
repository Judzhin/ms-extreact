/**
 * @access protected
 * @author Judzhin Miles <info[woof-woof]msbios.com>
 */
import React, {Component} from 'react'
import {TitleBar, Button} from '@extjs/ext-react';

/**
 *
 */
class Header extends Component {

    render() {
        return (
            <TitleBar docked="top" shadow style={{zIndex: 2}}>
                <Button
                    align="left"
                    iconCls="x-fa fa-bars"
                    // handler={actions.toggleTree}
                />
                {/*<div className="ext ext-sencha" style={{margin: '0 5px 0 7px', fontSize: '20px', width: '20px'}} />*/}
                {/*<a href="#" className="app-title">*/}
                ЄРАУ - Єдиний Реєстр Адвокатів Україниbeta 2.0
                {/*</a>*/}
            </TitleBar>
        );
    }
}

export default Header;