import { StackNavigator } from 'react-navigation'
import Main from '../containers/main-containers.js'
import Category from '../containers/category-containers.js'
import SplashScreen from '../views/splash-screen'

const router = StackNavigator(
    {
        Main: {
            screen: Main,
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
        initialRouteName: 'Category',
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
