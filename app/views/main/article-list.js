import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

class ArticleList extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>ArticleList1</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    }
})

export default ArticleList
