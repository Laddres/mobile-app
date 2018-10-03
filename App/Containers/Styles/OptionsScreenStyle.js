import { StyleSheet } from 'react-native'
import { Colors, Fonts, Metrics } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingHorizontal: Metrics.smallMargin
  },
  header: {
    justifyContent: 'center'
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: Fonts.size.h1,
    color: Colors.sectionTitle,
    lineHeight: Fonts.size.h1,
    marginTop: Metrics.smallMargin,
    marginBottom: Metrics.baseMargin
  },
  content: {
    flex: 1,
    marginTop: Metrics.doubleSection
  },
  title: {
    color: Colors.title,
    fontSize: Fonts.size.small,
    fontWeight: Fonts.weight.medium
  },
  pickerContainer: {
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
  }
})
