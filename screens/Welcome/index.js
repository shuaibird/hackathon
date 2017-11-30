import React, { Component } from 'react'
import { Button, Container, Text } from 'native-base'
import { Actions } from 'react-native-router-flux'

class Welcome extends Component {

    forward = () =>
        Actions.main()

    render() {
        return (
            <Container>
                <Button
                    onPress={this.forward}
                >
                    <Text>Welcome</Text>
                </Button>
            </Container>
        )
    }
}

export default Welcome
