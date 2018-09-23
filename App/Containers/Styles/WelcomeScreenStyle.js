import { StyleSheet } from 'react-native'
import { Colors, Fonts, Metrics } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background
  },
  header: {
    marginTop: Metrics.marginVertical,
    alignItems: 'center'
  },
  logo: {
    width: 0.7 * Metrics.screenWidth
  },
  body: {
    paddingHorizontal: Metrics.doubleMarginHorizontal
  },
  question: {
    marginTop: Metrics.marginVertical,
    fontSize: Fonts.size.regular,
    fontWeight: Fonts.weight.medium,
    color: Colors.subtitle
  },
  answer: {
    color: Colors.title,
    fontSize: Fonts.size.medium,
    marginTop: Metrics.smallMargin,
    marginBottom: Metrics.marginVertical
  },
  link: {
    textDecorationLine: 'underline'
  },
  buttonNextStep: {
    backgroundColor: Colors.text,
    borderRadius: Metrics.borderRadius,
    marginVertical: Metrics.baseMargin,
    marginHorizontal: 0.1 * Metrics.screenWidth,
    paddingVertical: Metrics.marginVertical + Metrics.smallMargin,
    alignItems: 'center'
  },
  buttonContent: {
    color: Colors.white,
    fontWeight: Fonts.weight.bold,
    fontSize: Fonts.size.medium
  }
})
