import { StyleSheet } from 'react-native'
import { Colors, Fonts, Metrics } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    alignSelf: 'center',
    color: Colors.title,
    fontSize: Fonts.size.small,
    fontWeight: Fonts.weight.medium
  },
  picker: {
    width: Metrics.screenWidth
  },
  buttonNextStep: {
    alignSelf: 'center',
    backgroundColor: Colors.text,
    borderRadius: Metrics.borderRadius,
    marginVertical: Metrics.marginVertical,
    paddingVertical: Metrics.marginVertical + Metrics.smallMargin,
    alignItems: 'center',
    width: 0.5 * Metrics.screenWidth
  },
  buttonContent: {
    color: Colors.white,
    fontWeight: Fonts.weight.medium,
    fontSize: Fonts.size.medium
  }
})
