import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createEvent } from '../../actions/events';

export class CreateForm extends Component {
    state = {
        topic: '',
        description: '',
        language_level: '',
        language_title: '',
        date: '',
        time: '',
        category_title: '',
        author_name: '',
        max_members: '',
        location: ''
    }

    static propTypes = {
        createEvent: PropTypes.func.isRequired
    };

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    onSubmit = e => {
        e.preventDefault();
        const { topic, description, language_level, language_title,
            date, time, category_title, max_members, location
        } = this.state;
        const event = {
            topic, description, language_level, language_title,
            date, time, category_title, max_members, location
        };
        this.props.createEvent(event);
        this.setState({
            topic: '',
            description: '',
            language_level: '',
            language_title: '',
            date: '',
            time: '',
            category_title: '',
            author_name: '',
            max_members: '',
            location: ''
        });
    };

    render() {
        const { topic, description, language_level, language_title,
            date, time, category_title, max_members, location } = this.state;
        return (
            <Fragment>
                <div className="container">
                    <div className="card card-body mt-4 mb-4">
                        <h2>Create event</h2>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label>Topic</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    name="topic"
                                    onChange={this.onChange}
                                    value={topic}
                                />
                            </div>
                            <div className="form-group">
                                <div className="row">
                                    <div className="col">
                                        <label>Category</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="category_title"
                                            onChange={this.onChange}
                                            value={category_title}
                                        />
                                    </div>
                                    <div className="col">
                                        <label>Number of members</label>
                                        <input
                                            className="form-control"
                                            type="number"
                                            min="1"
                                            max="20"
                                            name="max_members"
                                            onChange={this.onChange}
                                            value={max_members}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Description</label>
                                <textarea
                                    className="form-control"
                                    type="text"
                                    name="description"
                                    onChange={this.onChange}
                                    value={description}
                                />
                            </div>
                            <div className="form-group">
                                <label>Language</label>
                                <div className="row">
                                    <div className="col">
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder="English"
                                            name="language_title"
                                            onChange={this.onChange}
                                            value={language_title}
                                        />
                                    </div>
                                    <div className="col">
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder="B1"
                                            name="language_level"
                                            onChange={this.onChange}
                                            value={language_level}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Date&Time</label>
                                <div className="row">
                                    <div className="col">
                                        <input
                                            className="form-control"
                                            type="date"
                                            name="date"
                                            onChange={this.onChange}
                                            value={date}
                                        />
                                    </div>
                                    <div className="col">
                                        <input
                                            className="form-control"
                                            type="time"
                                            name="time"
                                            onChange={this.onChange}
                                            value={time}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Location</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    name="location"
                                    onChange={this.onChange}
                                    value={location}
                                />
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default connect(null, { createEvent })(CreateForm);
