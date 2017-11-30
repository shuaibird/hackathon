import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { BackgroundImg } from '../../components'
import { images } from '../../assets'
import { ShotButton } from './parts'

class Welcome extends Component {

    forward = () =>
        Actions.main()

    render() {
        return (
            <BackgroundImg
                source={images.background}
            >
                <ShotButton
                />
            </BackgroundImg>
        )
    }
}

const styles = StyleSheet.create({
})

export default Welcome
