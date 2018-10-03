import { StyleSheet } from 'react-native'
import { Colors, Fonts, Metrics } from '../../Themes/'

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.background
  },
  contentContainer: {
    justifyContent: 'center',
    paddingHorizontal: Metrics.doubleBaseMargin,
    paddingVertical: Metrics.section
  },
  internalContainer: {},
  header: {
    justifyContent: 'center'
  },
  headerText: {
    fontWeight: Fonts.weight.bold,
    fontSize: Fonts.size.h1,
    color: Colors.sectionTitle,
    lineHeight: Fonts.size.h1,
    marginBottom: Metrics.marginVertical
  },
  content: {
    flex: 1,
    marginHorizontal: Metrics.smallMargin,
    marginVertical: Metrics.baseMargin
  },
  title: {
    color: Colors.title,
    fontSize: Fonts.size.small,
    fontWeight: Fonts.weight.medium
  },
  firstTime: {
    marginBottom: Metrics.baseMargin,
    textAlign: 'center'
  },
  optionContainer: {
    marginVertical: Metrics.marginVertical
  },
  picker: {
    marginHorizontal: Metrics.smallMargin
  },
  buttonNextStep: {
    alignSelf: 'center',
    backgroundColor: Colors.text,
    borderRadius: Metrics.borderRadius,
    paddingVertical: Metrics.marginVertical + Metrics.smallMargin,
    alignItems: 'center',
    width: 0.5 * Metrics.screenWidth
  },
  buttonText: {
    color: Colors.white,
    fontWeight: Fonts.weight.medium,
    fontSize: Fonts.size.medium
  },
  inlineOption: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  selectedChoiceButton: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  selectedChoice: {
    color: Colors.text,
    fontSize: Fonts.size.gap
  }
})
