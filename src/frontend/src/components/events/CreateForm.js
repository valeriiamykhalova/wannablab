import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createEvent } from '../../actions/events';

export class CreateForm extends Component {
    state = {
        topic: '',
        description: '',
        date: '',
        time: '',
        category_id: '1', // TODO: set default values in normal way
        level_id: '2',
        language_id: '1',
        max_members: '',
        location: ''
    }

    static propTypes = {
        createEvent: PropTypes.func.isRequired,
    };

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    onSubmit = e => {
        e.preventDefault();
        const { topic,
            description,
            date,
            time,
            max_members,
            location,
            category_id,
            language_id,
            level_id,
            members
        } = this.state;
        const event = {
            topic,
            description,
            date,
            time,
            max_members,
            location,
            category_id,
            language_id,
            level_id,
            members
        };
        this.props.createEvent(event);
        this.setState({
            topic: '',
            description: '',
            date: '',
            time: '',
            max_members: '',
            category_id: '1', // TODO: update default values in normal way
            level_id: '2',
            language_id: '1',
            location: ''
        });
    };

    render() {
        const { topic,
            description,
            date,
            time,
            max_members,
            location,
            language_id,
            level_id,
            category_id
        } = this.state;
        const { categories, languages, levels } = this.props;
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
                                        <select
                                            className="form-control"
                                            name="category_id"
                                            value={category_id}
                                            onChange={this.onChange}
                                        >
                                            {categories.map(category => (
                                                <option value={category.id} key={category.id}>{category.name}</option>
                                            ))}
                                        </select>
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
                                        <select
                                            className="form-control"
                                            name="language_id"
                                            value={language_id}
                                            onChange={this.onChange}
                                        >
                                            {languages.map(language => (
                                                <option value={language.id} key={language.id}>{language.name}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="col">
                                        <select
                                            className="form-control"
                                            name="level_id"
                                            value={this.state.defaultValue}
                                            value={level_id}
                                            onChange={this.onChange}
                                        >
                                            {levels.map(level => (
                                                <option value={level.id} key={level.id}>{level.full_name}</option>
                                            ))}
                                        </select>
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

const mapStateToProps = state => ({
    events: state.events.events,
    categories: state.categories.categories,
    languages: state.languages.languages,
    levels: state.levels.levels
});

export default connect(mapStateToProps, { createEvent })(CreateForm);