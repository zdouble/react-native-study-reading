import { StackNavigator, TabNavigator } from 'react-navigation'
import Main from '../containers/main-containers.js'
import Category from '../containers/category-containers.js'
import SplashScreen from '../views/splash-screen'
import Feedback from '../views/feedback'
import About from '../views/about'

const tabContainer = TabNavigator(
    {
        Main: { screen: Main },
        Category: { screen: Category },
        Feedback: { screen: Feedback },
        About: { screen: About }
    }
)

const router = StackNavigator(
    {
        Home: {
            screen: tabContainer,
            navigationOptions: {
                header: null
            }
        },
        SplashScreen: {
            screen: SplashScreen,
            navigationOptions: {
                header: null
            }
        },
        Category: {
            screen: Category,
            navigationOptions: {
                headerTitle: '分类'
            }
        }
    },
    {
        initialRouteName: 'Home',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#3e9ce9'
            },
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
)

export default router
