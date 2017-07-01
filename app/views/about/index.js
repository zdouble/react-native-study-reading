import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import DeviceInfo from 'react-native-device-info'
import { View, Text, StyleSheet, Image } from 'react-native'

const logo = require('../../assets/images/about_logo.png')

class About extends Component {
    static navigationOptions = {
        title: '关于',
        tabBarIcon: ({ tintColor }) => (
            <Icon name="md-information-circle" size={25} color={tintColor} />
        )
    }
    render() {
        console.log(this.props)
        return (
            <View style={styles.container}>
                <View style={styles.content}>
                    <Image style={styles.logo} source={logo} />
                    <Text style={styles.version}>{DeviceInfo.getVersion()}</Text>
                    <Text style={styles.title}>iReading</Text>
                    <Text style={styles.subTitle}>让生活更精彩</Text>
                </View>
                <View>
                    <Text>免责声明：所有内容均来自:</Text>
                    <Text>https://www.showapi.com</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    content: {
        flex: 1,
        alignItems: 'center'
    },
    logo: {
        width: 110,
        height: 110,
        marginTop: 50
    }
})

export default About
