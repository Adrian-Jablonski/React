import React, {Component} from 'react';
import CounterControl from './CounterControl';
import CounterOutput from './CounterOutput';
import {connect} from 'react-redux';

class Counter extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <CounterOutput counterLabel = {this.props.ctr} />
                <CounterControl onButtonPush = {this.props.onIncrementCounter} title="increment +1" />
                <CounterControl title="decrement -1" />
                <CounterControl title="increment +5" />
                <CounterControl title="decrement -5" />
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        ctr: state.counter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter : () => dispatch({type : 'INC_COUNTER'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)


