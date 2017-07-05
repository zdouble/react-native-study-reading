import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    ScrollView
} from 'react-native'
import store from 'react-native-simple-store'
import { getTypeList } from '../../api'
import Button from '../../components/button'
import Loading from '../../components/loading'
import routeReset from '../../utils/router-reset.js'

class Category extends Component {
    constructor(props) {
        super(props)
        this.state = {
            typeList: null
        }
    }

    componentWillMount() {
        store.get('typeList').then(res => {
            this.setState({ tempDate: res || [] })
            this.props.actions.categoryActions.setTypeList(res || [])
        })
        getTypeList()
            .then(res => this.setState({ typeList: res.showapi_res_body.typeList }))
    }

    componentDidMount() {
        this.props.navigation.setParams({ selectType: this.selectType })
    }

    renderContent() {
        if (!this.state.typeList) {
            return <Loading size="large" />
        }

        let arr = this.state.typeList.map(item => {
            let obj = { ...item }
            for (var i = 0; i < this.state.tempDate.length; i++) {
                if (item.id === this.state.tempDate[i].id) {
                    obj = {
                        ...item,
                        selected: true
                    }
                }
            }
            return obj
        })

        return (
            <ScrollView contentContainerStyle={styles.typeBtnWrap}>
                {
                    arr.map(item =>
                        <Button
                            containerStyle={[
                                styles.btnContainer,
                                {
                                    backgroundColor: item.selected ? '#3e9ce9' : '#fff'
                                }
                            ]}
                            textStyle={{
                                color: item.selected ? '#fff' : '#3e9ce9'
                            }}
                            activeOpacity={1}
                            text={item.name}
                            key={item.id}
                            onPress={() => this.select(item)}
                        />
                    )
                }
            </ScrollView>
        )
    }

    select = (type) => {
        let index = -1
        let tempDate = this.state.tempDate

        tempDate.map((item, indexs) => {
            if (item.id === type.id) {
                index = indexs
            }
        })

        if (index !== -1) {
            tempDate.splice(index, 1)
        } else {
            tempDate.push(type)
        }

        this.setState({
            tempDate: tempDate
        })
    }

    selectType = () => {
        let data = this.state.tempDate.length === 0 ? this.state.typeList : this.state.tempDate
        store.save('typeList', data)
            .then(() => this.props.actions.categoryActions.setTypeList(data))
            .then(() => store.save('isFirst', false))
            .then(() => this.props.actions.userActions.setUserIsFirst(false))
            .then(() => store.save('category', data))
            .then(() => routeReset({ navigation: this.props.navigation, routeName: 'Home' }))
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text>{`${this.props.user.isFirst ? '初次见面,' : ''}请选择您感兴趣的类别`}</Text>
                </View>
                {this.renderContent()}
                {
                    this.props.user.isFirst &&
                    <Button
                        containerStyle={styles.footBtnContainer}
                        textStyle={{
                            color: '#fff'
                        }}
                        text='确认'
                        onPress={this.selectType}
                    />
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        height: 40,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    typeBtnWrap: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        paddingVertical: 10
    },
    btnContainer: {
        paddingVertical: 15,
        paddingHorizontal: 25,
        margin: 10,
        alignItems: 'center',
        borderRadius: 15
    },
    footBtnContainer: {
        height: 40,
        margin: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3e9ce9'
    },
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Category
