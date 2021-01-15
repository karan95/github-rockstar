import React from 'react';

/**
 * Dynamic-table Component to display dynamic data
 * 
 */

class Table extends React.Component {
    renderTableHeader() {
        // render table header based on the object keys
        let header = Object.keys(this.props.data[0]);
        return header.map((key, index) => {
            return <th scope="col" key={index}>{key.toUpperCase()}</th>
        })
    }

    renderTableData() {
        // additional checks can be added to validate the table data
        let dataKeys = Object.keys(this.props.data[0]);
        return this.props.data.map((rowData, index) => {
            return (
                <tr key={index}>
                    { dataKeys.map(prop => {
                        return <td key={prop}>{rowData[prop]}</td>
                    })}
                </tr>
            )
        })
    }

    render() {
        return (
            <table className="table table-dark">
                <thead>
                    <tr>
                        {this.props.data[0] && this.renderTableHeader()}
                    </tr>
                </thead>

                <tbody>
                    {this.props.data[0] && this.renderTableData()}
                </tbody>
            </table>
        )
    }
}

export default Table