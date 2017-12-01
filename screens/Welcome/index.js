import React, { Component } from 'react'
import { Actions } from 'react-native-router-flux'
import BgImg from './BgImg'
import ShotButton from './ShotButton'

class Welcome extends Component {

    start = () =>
        Actions.capture()

    render() {
        return (
            <BgImg>
                <ShotButton onPress={this.start} />
            </BgImg>
        )
    }
}

export default Welcome
