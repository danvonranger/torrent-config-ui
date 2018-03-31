import React, { Component } from 'react';

class AddSeries extends Component {
    constructor() {
        super();
        this.state = {
            series: []
        }
    }

    componentDidMount() {
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log('CLICK', this.refs.newName.value);

        var body = { name: this.refs.newName.value };
        console.log('stringify', JSON.stringify(body));
        fetch('/api/add', {
            method: 'POST',
            body: JSON.stringify(body),
            headers: { 'Content-Type': 'application/json' },
        });

    }

    render() {
        return (
            <div>
                <h2>Add TV Series</h2>
                <form id="add-series" onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" ref="newName" required />
                    <input type="submit" value="Add" />
                </form>
            </div>
        );
    }
}

export default AddSeries;