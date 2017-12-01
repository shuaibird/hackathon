import React from 'react'
import { StyleSheet } from 'react-native'
import { Button, Icon } from 'native-base'
import { colors } from '../styles'

const IconButton = ({ onPress, name, size, style }) => {
    return (
        <Button
            style={[styles.button, style]}
            onPress={onPress}
        >
            <Icon
                name={name}
                style={{ fontSize: size }}
            />
        </Button>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.transparent,
    },
})

export default IconButton
