import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view'

class MyClass extends Component {
    render() {
        return (
            <ScrollableTabView
                style={styles.container}
                renderTabBar={() => <DefaultTabBar backgroundColor='rgba(255, 255, 255, 0.7)' />}
                tabBarPosition='overlayTop'
            >
                <View tabLabel='iOS' style={styles.tabView}>
                    <Text>11</Text>
                </View>
                <View tabLabel='Android' style={styles.tabView}>
                    <Text>22</Text>
                </View>
            </ScrollableTabView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    tabView: {
        flex: 1,
        backgroundColor: '#000'
    }
})

export default MyClass
