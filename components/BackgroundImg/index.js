import React from 'react'
import { Image, StyleSheet } from 'react-native'

const BackgroundImg = ({ source, style, children, ...props }) => {
    return (
        <Image
            source={source}
            style={[styles.image, style]}
            {...props}
        >
        {children}
        </Image>
    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        width: null,
        height: null,
    }
})

export default BackgroundImg
