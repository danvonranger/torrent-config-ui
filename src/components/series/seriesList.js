import React, { Component } from 'react';
import SeriesItem from './seriesItem';
import AddSeries from './addSeries';
import './series.css';

class SeriesList extends Component {

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
                <div>
                    {this.state.series.map(function (item, index) {
                        return (
                            <SeriesItem item={item} key={index} />
                        );
                    })}
                </div>
                <AddSeries onAdd={this.addItem.bind(this)} />
            </div>
        );
    }

    addItem(item) {
        var body = { name: item };
        fetch('/api/add', {
            method: 'POST',
            body: JSON.stringify(body),
            headers: { 'Content-Type': 'application/json' },
        }).then(res => res.json())
        .then(newSeries => {
            if(newSeries.name){
                let oldState = this.state.series;
                oldState.push(newSeries);
                this.setState(oldState);
            }else{
                console.log('Series already exists');
            }
        });
    }
}

export default SeriesList;
