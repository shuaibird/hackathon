import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Container } from 'native-base'
import { connect } from 'react-redux'
import { colors } from '../../styles'
import Info from './Info'
import Lyrics from './Lyrics'
import Control from './Control'

class Player extends Component {
    render() {
        return (
            <Container
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
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.megenta,
        flex: 1,
    },
    top: {
        flex: 100000,
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
