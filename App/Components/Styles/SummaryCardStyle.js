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
    fontSize: Fonts.size.title
  },
  subsection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: Metrics.doubleSection,
    marginBottom: Metrics.doubleBaseMargin,
    width: '100%'
  },
  partiesLeftSubsubsection: {
    flex: 4
  },
  partiesRightSubsubsection: {
    flex: 9,
    alignItems: 'flex-end'
  },
  leftSubsubsection: {
    flex: 3
  },
  rightSubsubsection: {
    flex: 2
  },
  removeMarginRight: {
    marginRight: 0
  },
  previousParties: {
    color: Colors.title,
    fontSize: Fonts.size.medium
  },
  actualParty: {
    fontWeight: 'bold',
    color: Colors.text,
    fontSize: Fonts.size.medium
  },
  value: {
    color: Colors.text,
    fontWeight: 'bold',
    fontSize: Fonts.size.h3
  },
  description: {
    color: Colors.text,
    fontSize: Fonts.size.small
  }
})
