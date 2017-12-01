import React, { Component } from 'react'
import { Container, Text } from 'native-base'
import { connect } from 'react-redux'
import { Loading } from './parts'

class Main extends Component {
    render() {
        return (
            <Container>
                {
                    this.props.loading ?
                    <Loading /> :
                    <Text>Main</Text>
                }
            </Container>
        )
    }
}

const mapStateToProps = ({ loading }) => ({
    loading,
})

export default connect(mapStateToProps)(Main)
