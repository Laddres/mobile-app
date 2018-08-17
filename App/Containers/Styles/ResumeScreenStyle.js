import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingHorizontal: Metrics.doubleMarginHorizontal
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Metrics.marginVertical
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  backImage: {
    width: Metrics.images.small,
    height: Metrics.images.small,
    marginRight: Metrics.smallMargin
  },
  backText: {
    fontSize: Fonts.size.h6,
    color: Colors.title,
    fontWeight: 'bold'
  },
  logo: {
    width: Metrics.images.medium,
    height: Metrics.images.medium
  }
})
