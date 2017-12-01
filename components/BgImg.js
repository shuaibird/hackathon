import React from 'react'
import { Image, StyleSheet } from 'react-native'
import { Container } from 'native-base'

const BackgroundImg = ({ children, image, style }) => {
    return (
        <Container>
            <Image
                source={image}
                style={styles.image}
            >
            </Image>
            <Container
                style={[styles.container, style]}
            >
                {children}
            </Container>
        </Container>
    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        width: null,
        height: null,
    },
    container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    },
})

export default BackgroundImg
