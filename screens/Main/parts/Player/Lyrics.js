import React, { Component } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Text } from 'native-base'
import { colors } from '../../../../styles'

const Lyrics = ({ style, lyrics }) => {
    return (
        <ScrollView
            style={styles.wrapper}
        >
            <View
                style={[styles.container, style]}
            >
                {
                    lyrics.map(lyric => {
                        return (
                            <Text
                                key={lyric}
                                style={styles.line}
                            >
                                {lyric}
                            </Text>
                        )
                    })
                }
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 20,
        marginBottom: 20,
    },
    container: {
        paddingLeft: 30,
        paddingRight: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    line: {
        color: colors.white,
        paddingTop: 5,
        paddingBottom: 5,
    }
})
export default Lyrics
