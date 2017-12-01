import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Container } from 'native-base'
import streamer from 'react-native-audio-streamer'
import { IconButton } from '../../components'

class Control extends Component {
    componentDidMount() {
        streamer.setUrl(this.props.link)
        this.play()
    }

    play = () =>
        streamer.play()

    pause = () =>
        streamer.pause()

    render() {
        return (
            <Container
                style={styles.container}
            >
                <IconButton
                    name='play'
                    size={30}
                    onPress={this.play}
                    style={{ marginRight: 45 }}
                />
                <IconButton
                    name='pause'
                    size={30}
                    onPress={this.pause}
                />
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
})

export default Control
