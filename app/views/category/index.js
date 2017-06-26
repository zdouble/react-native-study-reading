import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    ActivityIndicator,
    ScrollView
} from 'react-native'
import store from 'react-native-simple-store'
import { getTypeList } from '../../api'
import Button from '../../components/button'

class Category extends Component {
    constructor(props) {
        super(props)
        this.state = {
            typeListData: null
        }
    }

    componentWillMount() {
        store.get('typeList').then(res => this.setState({ tempDate: res || [] }))
        getTypeList()
            .then(res => this.setState({ typeList: res.showapi_res_body.typeList }))
    }

    renderContent() {
        const loading = (
            <View style={styles.loading}>
                <ActivityIndicator
                    animating
                    size="large"
                />
                <Text>数据正在加载</Text>
            </View>
        )
        if (!this.state.typeList) {
            return loading
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
        store.save('typeList', this.state.tempDate)
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text>初次见面，请选择您感兴趣的类别</Text>
                </View>
                {this.renderContent()}
                <Button
                    containerStyle={styles.footBtnContainer}
                    textStyle={{
                        color: '#fff'
                    }}
                    text='确认'
                    onPress={this.selectType}
                />
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
