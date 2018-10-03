import { createStackNavigator } from 'react-navigation'
import ResumeScreen from '../Containers/ResumeScreen'
import MainScreen from '../Containers/MainScreen'
import WelcomeScreen from '../Containers/WelcomeScreen'
import StateSelectionScreen from '../Containers/StateSelectionScreen'
import SplashScreen from '../Containers/SplashScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = createStackNavigator(
  {
    SplashScreen: { screen: SplashScreen },
    WelcomeScreen: { screen: WelcomeScreen },
    StateSelectionScreen: { screen: StateSelectionScreen },
    MainScreen: { screen: MainScreen },
    ResumeScreen: { screen: ResumeScreen }
  },
  {
    // Default config for all screens
    headerMode: 'none',
    cardStyle: { shadowColor: 'transparent' },
    initialRouteName: 'SplashScreen',
    navigationOptions: {
      headerStyle: styles.header
    }
  }
)

export default PrimaryNav
