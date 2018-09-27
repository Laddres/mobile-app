import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: 0.7 * Metrics.screenWidth
  },
  loader: {
    position: 'absolute'
  }
})
