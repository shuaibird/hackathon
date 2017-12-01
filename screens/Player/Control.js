import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Container, Icon } from 'native-base'
import streamer from 'react-native-audio-streamer'

class Control extends Component {
    componentDidMount() {
        streamer.setUrl(this.props.link)
        this.play()
    }

    play = () =>
        streamer.play()

    pause = () =>
        steamer.pause()

    render() {
        return (
            <Container
                style={styles.container}
            >
                {/*<Icon
                    name='play'
                    style={styles.icon}
                />
                <Icon
                    name='pause'
                    style={styles.icon}
                />*/}
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {

    },
})

export default Control
