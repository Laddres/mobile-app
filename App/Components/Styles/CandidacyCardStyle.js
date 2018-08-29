import { StyleSheet } from 'react-native'
import { Colors, Fonts, Metrics } from '../../Themes'

export default StyleSheet.create({
  container: {
    paddingHorizontal: Metrics.smallMargin,
    width: '100%'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: Metrics.marginVertical
  },
  role: {
    flex: 0.65
  },
  yellow: {
    color: Colors.yellow
  },
  party: {
    flex: 0.35
  },
  title: {
    color: Colors.text,
    fontSize: Fonts.size.title
  },
  headerText: {
    color: Colors.text,
    fontSize: Fonts.size.regular,
    fontWeight: Fonts.weight.bold
  },
  headerSeparator: {
    backgroundColor: Colors.separator,
    height: 2,
    marginBottom: Metrics.marginVertical
  },
  info: {
    marginVertical: Metrics.marginVertical
  },
  bodyText: {
    color: Colors.text,
    fontSize: Fonts.size.medium,
    fontWeight: Fonts.weight.medium
  },
  performance: {},
  performanceButton: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: Metrics.marginVertical
  },
  performanceText: {
    color: Colors.text,
    fontWeight: Fonts.weight.bold
  },
  performanceSeparator: {
    backgroundColor: Colors.separator,
    height: 2,
    marginTop: Metrics.marginVertical
  },

  textCenter: {
    textAlign: 'center'
  },
  textRight: {
    textAlign: 'right'
  }
})
