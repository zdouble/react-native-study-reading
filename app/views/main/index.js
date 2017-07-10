import React, { Component } from 'react'
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view'
import ArticleList from './article-list.js'

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            locked: false
        }
    }

    changeLockedStatus = (State) => {
        this.setState({ locked: State })
    }

    render() {
        return (
            <ScrollableTabView
                renderTabBar={() => <ScrollableTabBar />}
                tabBarUnderlineStyle={{ backgroundColor: '#3e9ce9', height: 2 }}
                tabBarActiveTextColor="#3e9ce9"
                tabBarBackgroundColor="#fff"
                locked={this.state.locked}
                style={{ padding: 0 }}
            >
                {
                    this.props.category.map(item => (
                        <ArticleList
                            key={item.id}
                            tabLabel={item.name}
                            typeId={item.id}
                            navigation={this.props.navigation}
                            changeLockedStatus={this.changeLockedStatus}
                        />
                    ))
                }
            </ScrollableTabView>
        )
    }
}

export default Main
