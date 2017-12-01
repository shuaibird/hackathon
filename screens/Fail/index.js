import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'native-base'
import { BgImg } from '../../components'
import { images } from '../../assets'
import { colors } from '../../styles'


class Fail extends Component {
    render() {
        return (
            <BgImg image={images.lost}>
                <Text style={styles.text}>Ooop, WE'VE JUST GOT CAUGHT AT YOUR AMAZE...</Text>
            </BgImg>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        position: 'absolute',
        color: colors.white,
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
        backgroundColor: colors.transparent,
        top: 5,
    },
})

export default Fail
