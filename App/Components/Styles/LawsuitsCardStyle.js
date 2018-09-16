import { StyleSheet } from 'react-native'
import { Colors, Fonts, Metrics } from '../../Themes'

export default StyleSheet.create({
  container: {
    paddingHorizontal: Metrics.smallMargin,
    width: '100%',
    paddingVertical: Metrics.baseMargin
  },
  header: {
    // marginLeft: Metrics.doubleBaseMargin,
    marginBottom: Metrics.doubleBaseMargin
  },
  title: {
    color: Colors.title,
    fontSize: Fonts.size.title
  },
  number: {
    color: Colors.text,
    fontWeight: 'bold',
    fontSize: Fonts.size.h3
  },
  description: {
    color: Colors.text,
    fontSize: Fonts.size.small
  },
  noLawsuits: {
    alignItems: 'center'
  },
  image: {
    marginBottom: Metrics.baseMargin
  },
  message: {
    color: Colors.text,
    textAlign: 'center',
    fontSize: Fonts.size.medium,
    paddingHorizontal: Metrics.marginHorizontal
  }
})
