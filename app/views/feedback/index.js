import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { View, TextInput, StyleSheet, ToastAndroid, Keyboard } from 'react-native'

let feedbackText = ''

class Feedback extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: '建议',
        tabBarIcon: ({ tintColor }) => (
            <Icon name="md-thumbs-up" size={25} color={tintColor} />
        ),
        headerRight: (
            <Icon.Button
                name="md-checkmark"
                backgroundColor="transparent"
                underlayColor="transparent"
                activeOpacity={0.8}
                onPress={() => {
                    navigation.state.params.feedbackSubmit()
                }}
            />
        )
    })

    componentDidMount() {
        this.props.navigation.setParams({ feedbackSubmit: this.feedbackSubmit })
    }

    feedbackSubmit = () => {
        if (feedbackText.trim() === '') {
            ToastAndroid.show('请填写建议内容', ToastAndroid.SHORT)
        } else {
            ToastAndroid.show('您的问题已反馈，我们会及时跟进处理', ToastAndroid.SHORT)
            this.input.clear()
            Keyboard.dismiss()
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    ref={(ref) => { this.input = ref }}
                    style={styles.input}
                    maxLength={200}
                    placeholder="请写下您宝贵的意见或建议，与iReading一起进步！"
                    underlineColorAndroid="transparent"
                    onChangeText={(text) => { feedbackText = text }}
                    multiline
                    autoFocus
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    input: {
        flex: 1,
        textAlignVertical: 'top'
    }
})

export default Feedback
