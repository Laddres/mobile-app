import { createStackNavigator } from 'react-navigation'
import ResumeScreen from '../Containers/ResumeScreen'
import MainScreen from '../Containers/MainScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = createStackNavigator(
  {
    MainScreen: { screen: MainScreen },
    ResumeScreen: { screen: ResumeScreen }
  },
  {
    // Default config for all screens
    headerMode: 'none',
    initialRouteName: 'MainScreen',
    navigationOptions: {
      headerStyle: styles.header
    }
  }
)

export default PrimaryNav
