import React, { Component } from 'react'
import { Actions } from 'react-native-router-flux'
import { BgImg } from '../../components'
import ShotButton from './ShotButton'
import { images } from '../../assets'

class Welcome extends Component {

    start = () =>
        Actions.capture()

    render() {
        return (
            <BgImg image={images.bgImg}>
                <ShotButton onPress={this.start} />
            </BgImg>
        )
    }
}

export default Welcome
