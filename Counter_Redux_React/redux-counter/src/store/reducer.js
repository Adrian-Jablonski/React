const initialState = {
    counter: 150
}

const reducer = (state = initialState, action) => {
    return {
        ...state,
        counter : state.counter + 1
    }
}

export default reducer