import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Category from '../views/category'
import * as userActions from '../actions/user.js'
import * as categoryActions from '../actions/category.js'

class CategoryContainers extends Component {
    static navigationOptions = ({navigation}) => ({
        title: '分类',
        tabBarIcon: ({ tintColor }) => (
            <Icon name="md-pricetags" size={25} color={tintColor} />
        ),
        headerRight: (() => {
            console.log(navigation)
            if (navigation.state.params && !navigation.state.params.isFirst) {
                return <Icon.Button
                    name="md-checkmark"
                    backgroundColor="transparent"
                    underlayColor="transparent"
                    activeOpacity={0.8}
                    onPress={() => {
                        navigation.state.params.selectType()
                    }}
                />
            } else {
                return null
            }
        })()
    })

    render() {
        // console.log(this.props)
        return (
            <Category {...this.props} />
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        actions: {
            categoryActions: bindActionCreators(categoryActions, dispatch),
            userActions: bindActionCreators(userActions, dispatch)
        }
    }
}

export default connect(
    ({ user }) => ({ user }),
    mapDispatchToProps
)(CategoryContainers)
