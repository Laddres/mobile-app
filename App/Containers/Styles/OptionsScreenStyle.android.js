import { StyleSheet } from 'react-native'
import { Colors, Fonts, Metrics } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: Colors.background,
    paddingHorizontal: Metrics.smallPadding
  },
  header: {
    justifyContent: 'center'
  },
  headerText: {
    fontWeight: Fonts.weight.bold,
    fontSize: Fonts.size.h1,
    color: Colors.sectionTitle,
    lineHeight: Fonts.size.h1,
    marginTop: Metrics.baseMargin
  },
  content: {
    paddingHorizontal: Metrics.regularPadding
  },
  title: {
    color: Colors.title,
    fontSize: Fonts.size.small,
    fontWeight: Fonts.weight.medium
  },
  optionContainer: {
    marginVertical: Metrics.smallMargin
  },
  picker: {
    marginHorizontal: Metrics.smallMargin
  },
  buttonNextStep: {
    alignSelf: 'center',
    backgroundColor: Colors.text,
    borderRadius: Metrics.borderRadius,
    marginVertical: Metrics.marginVertical,
    paddingVertical: Metrics.marginVertical + Metrics.smallMargin,
    alignItems: 'center',
    width: 0.5 * Metrics.screenWidth,
    marginBottom: Metrics.doubleSection
  },
  buttonText: {
    color: Colors.white,
    fontWeight: Fonts.weight.medium,
    fontSize: Fonts.size.medium
  },
  inlineOption: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: Metrics.baseMargin
  }
})
