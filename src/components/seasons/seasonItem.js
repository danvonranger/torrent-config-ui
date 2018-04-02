import React, { Component } from 'react';
import EpisodeItem from './episodeItem';
require('./css/seasonItem.css');

class SeasonItem extends Component {

    constructor() {
        super();
        this.state = {
            seasons: []
        }
    }

    componentDidMount() {
        console.log('Component mound for season item');
        console.log(this.props.item);

        fetch(`/api/episodes/${this.props.item.id}`)
            .then(res => res.json())
            .then(seasons => this.setState({ seasons }));
    }

    render() {
        let data = this.state.seasons;
        data.sort(function (a, b) {
            return a.season > b.season
        });
        data = data.map(function (item, index) {
            if (item.episode === '*') {
                return (
                    <span className="completedSeason seasonData" key={index}>S{item.season}</span>
                );
            } else {
                return (
                    <span className="seasonData" key={index}>[S{item.season} E{item.episode}]</span>
                );
            }
        });

        return (
            <div>{data}</div>
        );
    }
}

export default SeasonItem;