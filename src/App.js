import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Layout from './Layout';
import { Container, Button } from '@extjs/ext-react';

// Enable responsiveConfig app-wide. You can remove this if you don't plan to build a responsive UI.
Ext.require('Ext.plugin.Responsive');

/**
 * The main application view
 */
export default function App() {

    return(
        <Container>
            <Button text="Some Button" />
        </Container>
    )

    // return (
    //     <Router>
    //         <Layout/>
    //     </Router>
    // )
    
}
