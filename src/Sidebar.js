/**
 * @access protected
 * @author Judzhin Miles <info[woof-woof]msbios.com>
 */
import React, {Component} from 'react'
import {Panel, SearchField, TreeList} from '@extjs/ext-react';

const navigation = {
    id: '/',
    text: 'All',
    children: [{
        text: 'SegmentedButton',
        // component: SegmentedButton,
        layout: 'center',
        navIcon: 'icon-segmented-buttons'
    }]
};

/**
 *
 */
class Sidebar extends Component {

    render() {
        return (
            <Panel
                scrollable="y"
                shadow
                style={{zIndex: 100, backgroundColor: 'white'}}
                header={false}
                collapsible={{ direction: 'left' }}
            >
                <SearchField flex={1} docked="top" ui="faded" margin="7" />
                <TreeList
                    ui="nav"
                    expanderFirst={false}
                    expanderOnly={false}
                    // onSelectionChange={onSelectionChange}
                    // selection={selection}
                />
            </Panel>
        );
    }
}

export default Sidebar;