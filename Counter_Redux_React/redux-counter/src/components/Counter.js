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
                <CounterControl onButtonPush = {this.props.onIncrementCounter1} title="increment +1" />
                <CounterControl onButtonPush = {this.props.onDecrementCounter1} title="decrement -1" />
                <CounterControl onButtonPush = {this.props.onIncrementCounter5} title="increment +5" />
                <CounterControl onButtonPush = {this.props.onDecrementCounter5} title="decrement -5" />
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
        onIncrementCounter1 : () => dispatch({type : 'INC_COUNTER1'}),
        onDecrementCounter1 : () => dispatch({type : 'DEC_COUNTER1'}),
        onIncrementCounter5 : () => dispatch({type : 'INC_COUNTER5'}),
        onDecrementCounter5 : () => dispatch({type : 'DEC_COUNTER5'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)


