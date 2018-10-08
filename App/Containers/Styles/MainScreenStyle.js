import { StyleSheet, Platform } from 'react-native'
import { Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background
  },
  listContainer: {
    marginTop: Metrics.marginVertical
  },
  content: {
    minHeight: '100%',
    paddingBottom: Metrics.section
  },
  header: {
    borderRadius: 10,
    flexDirection: 'row',
    height: Metrics.doubleSection,
    backgroundColor: Colors.white,
    marginTop: Metrics.baseMargin,
    marginHorizontal: Metrics.baseMargin,
    ...Platform.select({
      ios: {
        shadowOffset: { width: 0, height: 2 },
        shadowColor: Colors.text,
        shadowOpacity: 0.07
      },
      android: {
        elevation: 1
      }
    })
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
  },
  fetchingContainer: {
    flex: 1,
    justifyContent: 'center'
  }
})
