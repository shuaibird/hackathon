import React from 'react'
import { StyleSheet, Image } from 'react-native'
import { Container, Text } from 'native-base'
import { colors } from '../../../../styles'
import Rotate from './Rotate'

const Info = ({ info, style }) => {
    return (
        <Container
            style={[styles.container, style]}
        >
            <Rotate>
                <Image
                    style={styles.image}
                    source={{ uri: info.img }}
                />
            </Rotate>
            <Text
                style={[styles.text, styles.title]}
            >
                {info.title}
            </Text>
            <Text
                style={[styles.text, styles.artist]}
            >
                {info.artist}
            </Text>
        </Container>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        height: 200,
        width: 200,
        borderRadius: 100,
    },
    text: {
        color: colors.white,
        fontSize: 20,
    },
    title: {
        marginTop: 30,
        marginBottom: 10,
    },
    artist: {

    },
})

export default Info
