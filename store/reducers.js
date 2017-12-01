import { UPDATE_RESPONSE } from './action-types'

const initialState = {
    response: {},
}

Object.freeze(initialState)

export default (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_RESPONSE:
            return {
                ...state,
                response: action.payload,
            }
        default:
            return initialState
    }
}
