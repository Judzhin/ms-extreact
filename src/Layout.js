/**
 * @access protected
 * @author Judzhin Miles <info[woof-woof]msbios.com>
 */
import React, {Component} from 'react'
import {Container, Transition} from '@extjs/ext-react';
import Header from './Header';
import Sidebar from './Sidebar';
import Advocate from './panels/Advocate/Advocate'

/**
 * The main application view and routes
 */
class Layout extends Component {

    /**
     * 
     * @param {*} cmp 
     * @param {*} eOpts 
     */
    onToggleSidebar(cmp, eOpts) {

    }

    render() {

        const {
            selectedNavNode,
            component,
            navStore,
            files,
            children,
            showCode,
            showTree,
            actions,
            layout
        } = this.props;

        const example = component && React.createElement(component);

        return (
            <Container layout="hbox" fullscreen>
                <Header />
                <Container layout="fit" flex={1}>
                    <Sidebar />
                    <Transition type="slide" bindDirectionToLocation padding="30">
                        <Advocate />
                        {/*{ component ? (*/}
                            {/*<Container layout={layout} scrollable key={selectedNavNode.id} autoSize={layout !== 'fit'}>*/}
                                {/*{ layout === 'fit' ? (*/}
                                    {/*<Container padding="30" layout="fit">{ example }</Container>*/}
                                {/*) : (example)}*/}
                            {/*</Container>*/}
                        {/*) : selectedNavNode ? (*/}
                            {/*<NavView key={selectedNavNode.id} node={selectedNavNode}/>*/}
                        {/*) : null }*/}

                    </Transition>
                </Container>
            </Container>
        );
    };
}

// export default withRouter(Layout);
export default Layout;