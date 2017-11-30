import React, { Component } from 'react'
import { Actions } from 'react-native-router-flux'
import { BackgroundImg } from '../../components'
import { images } from '../../assets'
import { ShotButton } from './parts'

class Welcome extends Component {

    start = () =>
        Actions.capture()

    render() {
        return (
            <BackgroundImg
                source={images.background}
            >
                <ShotButton
                    onPress={this.start}
                />
            </BackgroundImg>
        )
    }
}

export default Welcome
