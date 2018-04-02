import React, { Component } from 'react';

class AddSeries extends Component {

    handleSubmit(e) {
        e.preventDefault();
        this.props.onAdd(this.refs.newName.value);
    }

    render() {
        return (
            <div>
                <form id="add-series" onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" ref="newName" required />
                    <input type="submit" value="Add" />
                </form>
            </div>
        );
    }
}

export default AddSeries;