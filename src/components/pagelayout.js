import React, { Component } from 'react';
import Series from './series/series'

class PageLayout extends Component {
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
                <h2>TV Show Configuration Data</h2>
                <Series series={this.state.series}/>
            </div>
        );
    }
}

export default PageLayout;