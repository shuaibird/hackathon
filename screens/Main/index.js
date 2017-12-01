import React, { Component } from 'react'
import { Container } from 'native-base'
import { connect } from 'react-redux'
import { Loading, Player } from './parts'
import { images } from '../../assets'

class Main extends Component {
    render() {
        return (
            <Container>
                {
                    this.props.loading ?
                    <Loading /> :
                    <Player
                        info={this.props.info}
                        lyrics={this.props.lyrics}
                        link={this.props.link}
                    />
                }
            </Container>
        )
    }
}

const mapStateToProps = ({ loading, response } = {}) => {
    const { artist, img, link, lyrics, title } = response
    return {
        loading,
        info: { img, title, artist },
        lyrics,
        link,
    }
}

export default connect(mapStateToProps)(Main)
