import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getEvent } from '../../actions/events';

class Event extends Component {

    static propTypes = {
        event: PropTypes.object.isRequired
    };

    componentDidMount() {
        this.props.getEvent(this.props.match.params.number);
    }

    render() {
        return (
            <li className="event-item" key={event.id}>
                <Link to={"/events/" + event.id}>
                    <h2 className="event-item__topic">{this.props.event.topic}</h2>
                    <span className="event-item__category">{this.props.event.category_title}</span>
                    <div className="event-item__details">
                        <div>
                            <p className="event-item__description">{this.props.event.description}
                            </p>
                            <span className="event-item__language">{this.props.event.language_title}
                                <span className="event-item__language-level">{this.props.event.language_level}</span>
                                            </span>
                        </div>
                        <div className="event-item__date-box">
                            {/*<div className="event-item__date">{this.showValidDate(event.date)}</div>*/}
                            {/*<div className="event-item__time">{this.showValidTime(event.time)}</div>*/}
                        </div>
                    </div>
                    <div className="event-item__user-details">
                        <div className="user-card">
                            <div className="fas fa-user-circle event-item__user"></div>
                            <div className="user-card__info">
                                <div className="user-card__name">{this.props.event.author_name}</div>
                                <div>
                                    <span className="fas fa-star event-item__star"></span>
                                    <span className="fas fa-star event-item__star"></span>
                                    <span className="fas fa-star event-item__star"></span>
                                    <span className="fas fa-star event-item__star"></span>
                                    <span className="fas fa-star event-item__star"></span>
                                </div>
                            </div>
                        </div>
                        <div className="event-item__members">
                            <span className="far fa-user event-item__member"></span>
                            <span className="far fa-user event-item__member"></span>
                        </div>
                    </div>
                </Link>
            </li>
        )
    }
}

const mapStateToProps = state => ({
    event: state.events.event
});

export default connect(mapStateToProps, { getEvent })(Event);
