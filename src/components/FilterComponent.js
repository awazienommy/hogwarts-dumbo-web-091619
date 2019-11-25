import React, { Component } from 'react'

class FilterComponent extends Component {
    render() {
        // console.log(this.props)
        return (
            <div style={{height: '10vh'}}>
                <button onClick={this.props.toggleFilter} >Greased Hogs</button>
                Sort Hogs: <select onChange={this.props.handleSort}>
                    <option value=''>Show All Hogs</option>
                    <option value='name'>Sort by name </option>
                    <option value='weight'>Sort by weight</option>
                </select>
            </div>
        )
    }
}

export default FilterComponent
