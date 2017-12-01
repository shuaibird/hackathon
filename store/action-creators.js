import { UPDATE_RESPONSE } from './action-types'
import { Actions } from 'react-native-router-flux'
import { uploadImg } from '../api'

export const fetchSong = (img) => {
    return async (dispatch) => {
        try {
            const response = await uploadImg(img)
            dispatch({
                type: UPDATE_RESPONSE,
                payload: response,
            })
            Actions.player()
        } catch (err) {
            dispatch({
                type: UPDATE_RESPONSE,
                payload: {},
            })
            Actions.fail()
        }
    }
}
