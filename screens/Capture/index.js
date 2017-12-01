import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Container } from 'native-base'
import Camera from 'react-native-camera'
import { connect } from 'react-redux'
import { CameraButton } from './parts'
import { updateLoading, fetchSong } from '../../store/action-creators'

class Capture extends Component {
    state = {
        camera: 'back',
    }

    switchCamera = () => {
        this.setState(prevState => ({
            camera: prevState.camera === 'back' ? 'front' : 'back',
        }))
    }

    takePicture = () => {
        this.refs.camera.capture({ metadata: {} })
            .then(({ path } = {}) => {
                this.props.fetchSong(path)
                this.props.updateLoading()
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <Container
                style={styles.container}
            >
                <Camera
                    ref='camera'
                    type={Camera.constants.Type[this.state.camera]}
                    captureTarget={Camera.constants.CaptureTarget.disk}
                    style={styles.preview}
                >
                    <CameraButton
                        icon='camera'
                        onPress={this.takePicture}
                    />
                    <CameraButton
                        icon='shuffle'
                        onPress={this.switchCamera}

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
        justifyContent: 'space-around',
    },
})

const mapActionsToProps = {
    updateLoading,
    fetchSong,
}

export default connect(null, mapActionsToProps)(Capture)
