import React from 'react'
import { StyleSheet } from 'react-native'
import { Button, Icon } from 'native-base'
import { colors } from '../../styles'

const CameraButton = ({ onPress, icon }) => {
    return (
        <Button
            style={styles.button}
            onPress={onPress}
        >
            <Icon
                name={icon}
                style={styles.buttonIcon}
            />
        </Button>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.transparent,
    },
    buttonIcon: {
        fontSize: 70,
    },
})

export default CameraButton
