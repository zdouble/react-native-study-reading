import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    ActivityIndicator,
    TouchableOpacity
} from 'react-native'
import { getTypeList } from '../../api'
import Button from '../../components/button.js'

class Category extends Component {
    constructor(props) {
        super(props)
        this.state = {
            typeListData: null,
            tempDate: []
        }
    }
    componentWillMount() {
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
            <View style={styles.typeBtnWrap}>
                {
                    arr.map(item => <Button key={item.id} {...item} select={() => this.select(item)} />)
                }
            </View>
        )
    }
    select = (type) => {
        let index = 0
        let find = false
        let tempDate = this.state.tempDate

        tempDate.map((item, indexs) => {
            if (item.id === type.id) {
                find = true
                index = indexs
            }
        })

        if (find) {
            tempDate.splice(index, 1)
        } else {
            tempDate.push(type)
        }

        this.setState({
            tempDate: tempDate
        })
    }
    render() {
        return (
            <View style={styles.container}>
                {this.renderContent()}
                <View>
                    <TouchableOpacity style={styles.footBtn}>
                        <Text>432</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    typeBtnWrap: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        paddingVertical: 10,
        flex: 1
    },
    footBtn: {
        height: 40
    },
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Category
