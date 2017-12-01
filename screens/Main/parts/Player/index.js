import React, { Component } from 'react'
import { StyleSheet, Image } from 'react-native'
import { Container, Text } from 'native-base'
import Rotate from './Rotate'
import { colors } from '../../../../styles'

class Player extends Component {
    render() {
        return (
            <Container
                style={styles.container}
            >
                <Container
                    style={styles.left}
                >
                    <Rotate>
                        <Image
                            style={styles.image}
                            source={this.props.thumbnail}
                        />
                    </Rotate>
                </Container>
                <Container
                    style={styles.right}
                >
                    <Text
                        style={[styles.text, styles.title]}
                    >
                        {this.props.title}
                    </Text>
                    <Text
                        style={[styles.text, styles.artist]}
                    >
                        {this.props.artist}
                    </Text>
                </Container>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.megenta,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    left: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        height: 200,
        width: 200,
        borderRadius: 100,
    },
    right: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: colors.white,
        fontSize: 20,
    },
    title: {
        marginBottom: 20,
    },
    artist: {

    },
})

export default Player
