import React, { Component } from 'react';
import './App.css';
import './index.css';
import { textAlign, spacing } from '@material-ui/system';
import { declaredPredicate } from '@babel/types';

class product_inventory_history extends Component {
    constructor(props) {
        super(props)
        this.state = {
            product: [
                { ItemID: '0123', Event: 'Product created', Date: '12/23/2018' },
                { ItemID: '0123', Event: 'Quantity of the item changes from 1 to 3', Date: '07/12/2019' },
                { ItemID: '0123', Event: 'Price of the item changes from 10 to 3', Date: '09/12/2019' }
            ]
        }
    }

    renderTableData() {
        return this.state.product.map((product, index) => {
            const { ItemID, Event, Date } = product
            return (
                <tr key = {ItemID}>
                    <td> {ItemID} </td>
                    <td> {Event} </td>
                    <td> {Date} </td>
                </tr>
            )
        })
    }
    
    renderTableHeader() {
        let header = Object.keys(this.state.product[0])
        return header.map((key, index) => {
            return <th key={index} > {key.toUpperCase()}</th>
        })
    }

    render() {
        return (
            <div>
                <h1 id = 'title'>History</h1>
                <table id = 'product'>
                    <tbody>
                        <tr> {this.renderTableHeader()}</tr>
                        {this.renderTableData()}
                    </tbody>
                </table>
            </div>
        );
    }

}
export default product_inventory_history;