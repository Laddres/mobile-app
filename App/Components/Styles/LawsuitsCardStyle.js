import { StyleSheet } from 'react-native'
import { Colors, Fonts, Metrics } from '../../Themes'

export default StyleSheet.create({
  container: {
    paddingHorizontal: Metrics.smallMargin,
    width: '100%',
    paddingVertical: Metrics.baseMargin
  },
  header: {
    marginLeft: Metrics.doubleBaseMargin,
    marginBottom: Metrics.doubleBaseMargin
  },
  title: {
    color: Colors.title,
    fontSize: Fonts.size.small
  },
  number: {
    color: Colors.text,
    fontWeight: 'bold',
    fontSize: Fonts.size.h1
  },
  description: {
    color: Colors.text,
    fontSize: Fonts.size.regular
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
    fontSize: Fonts.size.regular
  }
})
