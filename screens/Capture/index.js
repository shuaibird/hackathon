import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Container } from 'native-base'
import Camera from 'react-native-camera'
import { CameraButton } from './parts'

class Capture extends Component {
    takePicture = () => {
        this.refs.camera.capture({ metadata: {} })
            .then(data => console.log(data))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <Container
                style={styles.container}
            >
                <Camera
                    ref='camera'
                    aspect={Camera.constants.Aspect.fill}
                    style={styles.preview}
                >
                    <CameraButton
                        onPress={this.takePicture}
                    />
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
