import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

class Feedback extends Component {
    static navigationOptions = {
        title: '建议'
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>Feedback</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50'
    }
})

export default Feedback
