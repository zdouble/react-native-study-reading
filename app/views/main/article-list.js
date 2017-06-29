import React, { Component, PropTypes } from 'react'
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Image
} from 'react-native'

import { getArticleList } from '../../api'
import { dateFormat } from '../../utils'

class ArticleList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            refreshing: false,
            moreLoading: false,
            page: 1
        }
    }

    componentWillMount() {
        this.fetchDate()
    }

    fetchDate() {
        getArticleList({ typeId: this.props.typeId, page: this.state.page })
            .then(res => {
                console.log(res)
                let data = res.showapi_res_body.pagebean.contentlist.filter(item => !item.expire)
                if (this.state.moreLoading) {
                    this.setState({ data: [...this.state.data, ...data] })
                } else {
                    this.setState({ data })
                }
                this.setState({ moreLoading: false, refreshing: false })
            })
    }

    _renderItem = ({ item: artilce }) => {
        // console.log(artilce)
        return (
            <View style={styles.artilceContainer}>
                <Image
                    style={styles.artilceImage}
                    source={{ uri: artilce.contentImg }}
                />
                <View style={styles.artilceContent}>
                    <Text
                        key={artilce._id}
                        numberOfLines={2}
                    >
                        {artilce.title}
                    </Text>
                    <View style={styles.artilceInfo}>
                        <Text style={styles.artilceSource}>{artilce.userName}</Text>
                        <Text style={styles.artilceDate}>{dateFormat(artilce.date)}</Text>
                    </View>
                </View>

            </View>
        )
    }

    _onRefresh = () => {
        this.setState({ refreshing: true, page: 1 }, () => {
            this.fetchDate()
        })
    }
    _onEndReached = () => {
        this.setState({ moreLoading: true, page: ++this.state.page }, () => {
            this.fetchDate()
        })
    }

    _keyExtractor = (item, index) => item.id

    renderContent() {
        const data = this.state.data
        if (!data) {
            return null
        }
        return (
            <FlatList
                data={data}
                renderItem={this._renderItem}
                getItemLayout={(data, index) => ({ length: 87, offset: 87 * index, index })}
                onRefresh={this._onRefresh}
                onEndReached={this._onEndReached}
                refreshing={this.state.refreshing}
                keyExtractor={this._keyExtractor}
            />
        )
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderContent()}
            </View>
        )
    }
}

ArticleList.PropTypes = {
    typeId: PropTypes.number
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    artilceContainer: {
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        borderStyle: 'solid',
        flexDirection: 'row',
        padding: 10,
        flex: 1
    },
    artilceImage: {
        width: 88,
        height: 66
    },
    artilceContent: {
        flex: 1,
        paddingLeft: 10,
        justifyContent: 'space-between'
    },
    artilceInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    artilceSource: {
        color: '#87CEFA',
        fontSize: 12
    },
    artilceDate: {
        fontSize: 12
    }
})

export default ArticleList
