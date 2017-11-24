import React, { Component, PropTypes } from 'react'
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Image,
    RefreshControl,
    TouchableOpacity
} from 'react-native'

import { getArticleList } from '../../api'
import dateFormat from '../../utils/date-format.js'
import Loading from '../../components/loading'

class ArticleList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            refreshing: false,
            showMoreLoading: true,
            page: 1
        }
    }

    componentDidMount() {
        this.fetchDate()
    }

    fetchDate(loadMore) {
        getArticleList({ typeId: this.props.typeId, page: this.state.page })
            .then(res => {
                let { currentPage, allPages, contentlist } = res.showapi_res_body.pagebean

                let data = contentlist.filter(item => !item.expire)

                if (loadMore) {
                    data = this.filterData(data)
                    this.setState({ data: [...this.state.data, ...data] })
                } else {
                    this.setState({ data, showMoreLoading: true, refreshing: false })
                }

                if (currentPage >= allPages) {
                    this.setState({ showMoreLoading: false })
                }
            })
    }

    // 接口有点问题，可能会返回重复数据，通过id过滤一下
    filterData(data) {
        let datas = []
        data.forEach(element => {
            if (this.state.data.every(item => item.id !== element.id)) {
                datas.push(element)
            }
        })

        return datas
    }

    _renderItem = ({ item: artilce }) => {
        return (
            <TouchableOpacity
                style={styles.artilceContainer}
                onPress={() => this.props.navigation.navigate('WebViewPage', { url: artilce.url, title: artilce.title })}
            >
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

            </TouchableOpacity>
        )
    }

    _onRefresh = () => {
        // this.props.changeLockedStatus(true)
        this.setState({ refreshing: true, page: 1 }, () => {
            this.fetchDate()
        })
    }

    _onEndReached = () => {
        if (!this.state.showMoreLoading) {
            return
        }
        this.setState({ page: ++this.state.page }, () => {
            this.fetchDate(true)
        })
    }

    _ListFooterComponent = () => {
        if (this.state.showMoreLoading) {
            return <Loading />
        }

        return (
            <View style={{ alignItems: 'center', marginVertical: 10 }}>
                <Text>没有更多数据了</Text>
            </View>
        )
    }

    _keyExtractor = (item, index) => item.id

    renderContent() {
        let data = this.state.data
        if (!data.length) {
            return <Loading size="large" />
        }
        return (
            <FlatList
                data={data}
                renderItem={this._renderItem}
                getItemLayout={(data, index) => ({ length: 87, offset: 87 * index, index })}
                keyExtractor={this._keyExtractor}
                extraData={this.state}
                ListFooterComponent={this._ListFooterComponent}
                onEndReached={this._onEndReached}
                onEndReachedThreshold={0.1}
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={this._onRefresh}
                        colors={['#3e9ce9']}
                    />
                }
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
