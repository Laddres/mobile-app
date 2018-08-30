import { StyleSheet } from 'react-native'
import { Colors, Fonts, Metrics } from '../../Themes'

export default StyleSheet.create({
  container: {
    paddingHorizontal: Metrics.smallMargin,
    width: '100%',
    marginTop: Metrics.doubleBaseMargin
  },
  subtitle: {
    color: Colors.title,
    fontSize: Fonts.size.medium
  },
  subsection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: Metrics.doubleSection,
    marginBottom: Metrics.doubleBaseMargin
  },
  removeMarginRight: {
    marginRight: 0
  },
  previousParties: {
    color: Colors.title,
    fontSize: Fonts.size.gap
  },
  actualParty: {
    fontWeight: 'bold',
    color: Colors.text,
    fontSize: Fonts.size.gap
  },
  value: {
    color: Colors.text,
    fontWeight: 'bold',
    fontSize: Fonts.size.h2
  },
  description: {
    color: Colors.text,
    fontSize: Fonts.size.gap
  }
})
