import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getPersonalEvents } from '../../actions/events';


export class PersonalEvents extends Component {
    static propTypes = {
        events: PropTypes.array.isRequired,
        auth: PropTypes.object.isRequired,
        showValidDate: PropTypes.func.isRequired,
        showValidTime: PropTypes.func.isRequired,
        getPersonalEvents: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.getPersonalEvents();
    }

    render() {
        const filteredByAuthorEvents = this.props.events.filter(event =>
            event.author_id === this.props.auth.user.id
        );
        return (
            <Fragment>
                <section className="personal-sidebar">
                    <h2 className="personal-sidebar__title">My Events</h2>
                    <ul className="personal-sidebar__list">
                        {filteredByAuthorEvents.map(event => (
                            <li className="personal-sidebar__item" key={event.id}>
                                <div className="personal-sidebar-event">
                                    <h2 className="personal-sidebar-event__topic">{event.topic}
                                        <span className="fas fa-handshake personal-sidebar-event__item"></span>
                                    </h2>
                                    <div className="personal-sidebar-event__details">
                                        <div className="personal-sidebar-event__data-box">
                                            <div className="personal-sidebar-event__date">{this.props.showValidDate(event.date)}</div>
                                            <div className="personal-sidebar-event__time">{this.props.showValidTime(event.time)}</div>
                                        </div>
                                        <div className="personal-sidebar-event__members">
                                            <span className="fas fa-user event-item__member event-item__member--small"></span>
                                            <span className="far fa-user event-item__member event-item__member--small"></span>
                                        </div>
                                    </div>
                                    <div className="personal-sidebar-event__link-box">
                                        <Link to={"/events/" + event.id} className="personal-sidebar-event__link" href="#">
                                            Details of event..
                            </Link>
                                    </div>
                                </div>
                            </li>))
                        }
                    </ul>
                </section>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    events: state.events.events,
    auth: state.auth
});

export default connect(mapStateToProps, { getPersonalEvents })(PersonalEvents);
