import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Query extends Component {
    constructor(props) {
        super(props);

        this.onChangeNumber = this.onChangeNumber.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            number: 0,
            frequencies: []
        }
    }

    componentDidMount() {
        this.setState({
            number: 1,
            frequencies: []
        });
    }

    onChangeNumber(e) {
        this.setState({
            number:e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.history.push({
            pathname: '/frequency',
            state: this.state
        })
    }

    render() {
        return (
            <div>
                <h3>Enter a number to get the words with most frequencies:</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group mb-3">
                        <input
                            type="number"
                            className="form-control"
                            value={this.state.number}
                            onChange={this.onChangeNumber}
                        />
                    </div>

                    <div className="form-group text-center">
                        <input type="submit" value="Create frequency table" className="btn btn-primary m-3" />
                        <Link to="/" className="btn btn-danger m-3">Reset</Link>
                    </div>
                </form>
            </div>
        )
    }
}
