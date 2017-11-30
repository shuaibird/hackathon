import React, { Component } from 'react'
import { Button, Container, Text } from 'native-base'
import { Actions } from 'react-native-router-flux'
import { BackgroundImg } from '../../components'
import { images } from '../../assets'

class Welcome extends Component {

    forward = () =>
        Actions.main()

    render() {
        return (
            <BackgroundImg
                source={images.background}
            >

            </BackgroundImg>
        )
    }
}

export default Welcome
