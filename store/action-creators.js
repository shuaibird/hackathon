import { UPDATE_LOADING, UPDATE_RESPONSE } from './action-types'
import { uploadImg } from '../api'

export const updateLoading = () => {
    return {
        type: UPDATE_LOADING,
    }
}

export const fetchSong = (img) => {
    return async (dispatch) => {
        try {
            const response = await uploadImg(img)
            dispatch({
                type: UPDATE_RESPONSE,
                payload: response,
            })
        } catch (err) {
            console.log(err)
            dispatch({
                type: UPDATE_RESPONSE,
                payload: {},
            })
        } finally {
            dispatch(updateLoading())
        }
    }
}
