import React, { Component } from 'react';

class EpisodeItem extends Component {

    render() {
        return (
            <div>
                <span>{this.props.item}</span>
            </div>
        );
    }
}

export default EpisodeItem;