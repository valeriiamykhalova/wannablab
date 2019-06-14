import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getEvents } from '../../actions/events';

export class Events extends Component {
    static propTypes = {
        events: PropTypes.array.isRequired
    };

    componentDidMount() {
        this.props.getEvents();
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

const mapStateToProps = state => ({
    events: state.events.events
});

export default connect(mapStateToProps, { getEvents })(Events);
