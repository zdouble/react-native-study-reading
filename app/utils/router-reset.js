import { NavigationActions } from 'react-navigation'

const routeReset = ({ navigation, routeName, params = {} }) => {
    const resetAction = NavigationActions.reset({
        index: 0,
        actions: [
            NavigationActions.navigate({ routeName, params })
        ]
    })
    navigation.dispatch(resetAction)
}

export default routeReset
