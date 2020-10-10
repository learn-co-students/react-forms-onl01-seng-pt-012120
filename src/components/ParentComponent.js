import React, { Component } from 'react';
import Form from './Form';
import DisplayData from './DisplayData';

class ParentComponent extends Component {
    state = {
        firstName: '',
        lastName: ''
    }

    handleSubmit = event => {
        event.preventDefault()
        const data = new FormData(event.target)
        this.setState({
            firstName: data.get('firstName'),
            lastName: data.get('lastName')
        })
    }

    render() {
        return (
            <div>
                <Form
                    handleSubmit={this.handleSubmit}
                />
                <DisplayData formData={this.state}/>
            </div>
        );
    }
}

export default ParentComponent;
