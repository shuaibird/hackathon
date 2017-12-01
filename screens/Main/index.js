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
                        thumbnail={images.background}
                        title='All Of Me'
                        artist='Mike'
                    />
                }
            </Container>
        )
    }
}

const mapStateToProps = ({ loading }) => ({
    loading,
})

export default connect(mapStateToProps)(Main)
