import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Container } from 'native-base'
import { connect } from 'react-redux'
import { BgImg } from '../../components'
import { colors } from '../../styles'
import { images } from '../../assets'
import Info from './Info'
import Lyrics from './Lyrics'
import Control from './Control'

class Player extends Component {

    render() {
        return (
            <BgImg
                image={images.player}
                style={styles.container}
            >
                <Container
                    style={styles.top}
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
                <Container
                    style={styles.bottom}
                >
                    <Control
                        link={this.props.link}
                    />
                </Container>
            </BgImg>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(0, 0, 0, .7)',
    },
    top: {
        flex: 4,
        flexDirection: 'row',
        alignItems: 'center',
    },
    bottom: {
        flex: 1,
    },
    info: {
        flex: 1,
    },
    lyrics: {
        flex: 1,
    },
})

const mapStateToProps = ({ response } = {}) => {
    const { artist, img, link, lyrics, title } = response
    return {
        info: { img, title, artist },
        lyrics,
        link,
    }
}

export default connect(mapStateToProps)(Player)
