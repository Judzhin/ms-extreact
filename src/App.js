import React, {Component} from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import Layout from './Layout';
import {Container, Button, Panel} from '@extjs/ext-react';

// Enable responsiveConfig app-wide. You can remove this if you don't plan to build a responsive UI.
Ext.require('Ext.plugin.Responsive');

/**
 * The main application view
 */
export default function App() {

    return(
        <Layout />
    );

    // return (
    //     <Router>
    //         <Layout/>
    //     </Router>
    // )
}

// class App extends Component {
//     render() {
//         return (
//             <Layout />
//         );
//     }
// }

// export default App;