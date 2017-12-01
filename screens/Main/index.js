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
                        info={{
                            thumbnail: images.background,
                            title: 'All Of Me',
                            artist: 'Mike',
                        }}
                        lyrics={[
                            'line1',
                            'line2line2line2line2line2line2line2line2line2line2line2',
                        ]}
                        url='http://fs.open.kugou.com/677b2968c4de31d51c41f36903f6df2c/5a211e84/G013/M04/19/09/rYYBAFUNoi2AdlG7AC48VTPd088072.mp3'
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
