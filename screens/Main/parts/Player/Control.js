import React, { Component } from 'react'
import { Container } from 'native-base'
import RNAudioStreamer from 'react-native-audio-streamer'

class Control extends Component {
    componentDidMount() {
        RNAudioStreamer.setUrl(this.props.url)
        RNAudioStreamer.play()
        RNAudioStreamer.duration((err, duration)=>{
            console.log(1)
            if(!err) console.log(duration)
        })
    }

    render() {
        return (
            <Container></Container>
        )
    }
}

export default Control
