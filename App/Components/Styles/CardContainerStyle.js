import { StyleSheet, Platform } from 'react-native'
import { Colors, Metrics } from '../../Themes'

export default StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: Metrics.cards.minHeight,
    backgroundColor: Colors.white,
    ...Platform.select({
      ios: {
        shadowOffset: { width: 0, height: 4 },
        shadowColor: Colors.text,
        shadowOpacity: 0.1
      },
      android: {
        elevation: 2
      }
    }),
    padding: Metrics.cards.padding,
    marginTop: Metrics.marginVertical,
    marginBottom: Metrics.section,
    borderRadius: Metrics.cards.borderRadius
  },
  fetchingContainer: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
