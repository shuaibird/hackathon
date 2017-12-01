import React, { Component } from 'react'
import { StyleSheet, Image } from 'react-native'
import { Container, Text } from 'native-base'
import { colors } from '../../../../styles'
import Info from './Info'
import Lyrics from './Lyrics'

class Player extends Component {
    render() {
        return (
            <Container
                style={styles.container}
            >
                <Info
                    style={styles.info}
                    info={this.props.info}
                />
                <Lyrics
                    style={styles.lyrics}
                    lyrics={this.props.lyrics}
                />
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
    info: {
        flex: 1,
    },
    lyrics: {
        flex: 1,
    },
})

export default Player
