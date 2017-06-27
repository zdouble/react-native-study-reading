import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { View, Text, StyleSheet } from 'react-native'

class Feedback extends Component {
    static navigationOptions = {
        title: '建议',
        tabBarIcon: ({ tintColor }) => (
            <Icon name="md-thumbs-up" size={25} color={tintColor} />
        )
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
