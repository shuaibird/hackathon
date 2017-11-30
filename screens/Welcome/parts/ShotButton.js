import React from 'react'
import { StyleSheet } from 'react-native'
import { Button, Icon, Text } from 'native-base'

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
        backgroundColor: '#763ab2',
    },
    text: {
        fontWeight: 'bold',
    },
    icon: {
        fontSize: 35,
    },
})

export default ShotButton
