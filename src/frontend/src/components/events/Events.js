import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getEvents } from '../../actions/events';


export class Events extends Component {
    static propTypes = {
        events: PropTypes.array.isRequired,
        isLoading: PropTypes.bool,
        getEvents: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.getEvents();
    }

    showValidTime(time) {
        const timeArray = time.split(":")
        return timeArray.slice(0, timeArray.length - 1).join(":")
    }

    showValidDate(date) {
        const dateArray = date.split("-").reverse()
        return dateArray.slice(0, dateArray.length - 1).join(".")
    }

    render() {
        return (
            < Fragment >
                <h1 className="visually-hidden">List of all events</h1>
                <div className="wrapper">
                    <ul className="event-list">
                        {this.props.events.map(event => (
                            <li className="event-item" key={event.id}>
                                <Link to={"/events/" + event.id}>
                                    <h2 className="event-item__topic">{event.topic}</h2>
                                    {/* <span className="event-item__category">{event.category.title}</span>  */}
                                    <div className="event-item__details">
                                        <div>
                                            <p className="event-item__description">{event.description}
                                            </p>
                                            {/* <span className="event-item__language">{event.language.title}
                                                    <span className="event-item__language-level">{event.language.level}</span>
                                                </span> */}
                                        </div>
                                        <div className="event-item__date-box">
                                            <div className="event-item__date">{this.showValidDate(event.date)}</div>
                                            <div className="event-item__time">{this.showValidTime(event.time)}</div>
                                        </div>
                                    </div>
                                    <div className="event-item__user-details">
                                        <div className="user-card">
                                            <div className="fas fa-user-circle event-item__user"></div>
                                            <div className="user-card__info">
                                                <div className="user-card__name">{event.author_name}</div>
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
                        ))}
                    </ul>
                </div>
            </Fragment >
        );
    }
}

const mapStateToProps = state => ({
    events: state.events.events,
    isLoading: state.events.isLoading
});

export default connect(mapStateToProps, { getEvents })(Events);
