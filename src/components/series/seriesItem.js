import React, { Component } from 'react';
import SeasonItem from '../seasons/seasonItem';
require('./css/seriesItem.css');

class SeriesItem extends Component {

    render() {
        return (
            <div className="seriesItem">
                <div className="seriesName">{this.props.item.name}</div>
                <SeasonItem item={this.props.item} />
            </div>
        );
    }
}

export default SeriesItem;