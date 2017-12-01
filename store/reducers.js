import { UPDATE_LOADING, UPDATE_RESPONSE } from './action-types'

const initialState = {
    loading: false,
    response: {},
}

Object.freeze(initialState)

export default (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_LOADING:
            return {
                ...state,
                loading: !state.loading,
            }
        case UPDATE_RESPONSE:
            return {
                ...state,
                response: action.payload,
            }
        default:
            return initialState
    }
}
