const initialState = {
    counter: 150
}

const reducer = (state = initialState, action) => {
    if (action.type == 'INC_COUNTER1') {
        return {
            ...state,
            counter : state.counter + 1
        }
    }
    else if (action.type == 'DEC_COUNTER1') {
        return {
            ...state,
            counter : state.counter - 1
        }
    }
    else if (action.type == 'INC_COUNTER5') {
        return {
            ...state,
            counter : state.counter + 5
        }
    }
    else if (action.type == 'DEC_COUNTER5') {
        return {
            ...state,
            counter : state.counter - 5
        }
    }
    return state
}

export default reducer