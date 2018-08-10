import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background
  },
  content: {
    paddingBottom: Metrics.section
  },
  header: {
    borderRadius: 10,
    flexDirection: 'row',
    height: Metrics.navBarHeight,
    backgroundColor: Colors.white,
    marginTop: Metrics.baseMargin,
    marginHorizontal: Metrics.baseMargin
  },
  filtersButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: Metrics.images.medium
  },
  verticalSeparator: {
    width: 1,
    marginVertical: Metrics.smallMargin,
    backgroundColor: Colors.separator
  }
})
