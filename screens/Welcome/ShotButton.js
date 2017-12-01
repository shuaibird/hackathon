import React from 'react'
import { StyleSheet } from 'react-native'
import { Button, Icon, Text } from 'native-base'
import { colors } from '../../styles'

const ShotButton = ({ onPress }) => {
    return (
        <Button
            onPress={onPress}
            style={styles.button}
        >
            <Text
                style={styles.text}
            >
                TAKE A SHOT
            </Text>
            <Icon
                name='camera'
                style={styles.icon}
            />
        </Button>
    )
}

const styles = StyleSheet.create({
    button: {
        alignSelf: 'center',
        bottom: 75,
        position: 'absolute',
        backgroundColor: colors.purple,
    },
    text: {
        fontWeight: 'bold',
    },
    icon: {
        fontSize: 35,
    },
})

export default ShotButton
