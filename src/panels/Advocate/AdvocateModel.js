/**
 * @access protected
 * @author Judzhin Miles <info[woof-woof]msbios.com>
 */
import React, { Component } from 'react';
import { Grid, Column} from '@extjs/ext-react';

/**
 *
 */
export default class Advocate extends Component {

    store = Ext.create('Ext.data.Store', {
        model,
        autoLoad: true,
        pageSize: 0,
        proxy: {
            type: 'ajax',
            url: 'resources/data/CompanyData.json'
        }
    });


    /**
     *
     * @param format
     * @param value
     */
    renderSign = (format, value) => (
        <span style={{ color: value > 0 ? 'green' : value < 0 ? 'red' : ''}}>
            {Ext.util.Format.number(value, format)}
        </span>
    )

    /**
     *
     * @returns {XML}
     */
    render() {
        return (
            <Grid title="Stock Prices" store={this.store} shadow grouped>
                <Column text="Company" dataIndex="name" width="150"/>
                <Column text="Price" width="85" dataIndex="price" formatter='usMoney'/>
                <Column text="Change" width="100" dataIndex="priceChange" renderer={this.renderSign.bind(this, '0.00')}/>
                <Column text="% Change" dataIndex="priceChangePct" renderer={this.renderSign.bind(this, '0.00%')}/>
                <Column text="Last Updated" width="125" dataIndex="lastChange" formatter='date("m/d/Y")'/>
            </Grid>
        );
    }
};