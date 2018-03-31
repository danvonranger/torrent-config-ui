import React, { Component } from 'react';
import './series.css';

class Series extends Component {
    constructor() {
        super();
        this.state = {
            series: []
        }
    }

    componentDidMount() {
        fetch('/api/series')
            .then(res => res.json())
            .then(series => this.setState({ series }));
    }

    render() {
        return (
            <div>
                <h2>Current TV Series</h2>
                <ul>
                    {this.state.series.map(show =>
                        <li key={show.id}>{show.name}</li>
                    )}
                </ul>
            </div>
        );
    }
}

export default Series;
