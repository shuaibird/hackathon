import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Container } from 'native-base'
import Camera from 'react-native-camera'
import { CameraButton } from './parts'

class Capture extends Component {
    render() {
        return (
            <Container
                style={styles.container}
            >
                <Camera
                    ref={camera => this.camera = camera}
                    aspect={Camera.constants.Aspect.fill}
                    style={styles.preview}
                >
                    <CameraButton />
                </Camera>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    preview: {
        flex: 1,
        justifyContent: 'center',
    },
})

export default Capture
