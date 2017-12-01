import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Container } from 'native-base'
import Camera from 'react-native-camera'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import { IconButton } from '../../components'
import { fetchSong } from '../../store/action-creators'

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
        this.refs.camera.capture()
            .then(({ path } = {}) => {
                this.props.fetchSong(path)
                Actions.loading()
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
                    <IconButton
                        name='camera'
                        size={70}
                        onPress={this.takePicture}
                    />
                <IconButton
                        name='shuffle'
                        size={70}
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
    fetchSong,
}

export default connect(null, mapActionsToProps)(Capture)
