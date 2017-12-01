import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Container, Text } from 'native-base'
import { Bars } from 'react-native-loader'
import { colors } from '../../../styles'
import { genQuote } from '../../../utils'

class Loading extends Component {
    state = {
        quote: genQuote()
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({
                quote: genQuote()
            })
        }, 2000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        return (
            <Container
                style={styles.container}
            >
                <Text
                    style={styles.text}
                >
                    {this.state.quote}
                </Text>
                <Bars
                    size={25}
                    color={colors.white}
                />
            </Container>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.megenta,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: colors.white,
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 15,
    },
})

export default Loading
