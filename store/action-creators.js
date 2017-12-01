import { UPDATE_LOADING, UPDATE_RESPONSE } from './action-types'

export const updateLoading = () => {
    return {
        type: UPDATE_LOADING,
    }
}

// export const fetchSong = () => {
//     return async (dispatch) => {
//         try {
//             // await ...
//             dispatch({
//                 type: UPDATE_RESPONSE,
//             })
//         } catch (err) {
//
//         } finally {
//             updateLoading()
//         }
//     }
// }
