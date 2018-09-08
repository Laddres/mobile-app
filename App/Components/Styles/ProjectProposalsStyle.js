import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../Themes'

export default StyleSheet.create({
  container: {
    width: '100%'
  },
  separator: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderRadius: 0.5,
    borderStyle: 'dashed',
    borderColor: Colors.separator,
    marginBottom: Metrics.doubleBaseMargin,
    marginTop: Metrics.marginVertical
  },
  title: {
    color: Colors.title,
    fontSize: Fonts.size.title
  },
  statistics: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: Metrics.section,
    marginBottom: Metrics.doubleBaseMargin
  },
  total: {
    color: Colors.text,
    fontWeight: 'bold',
    fontSize: Fonts.size.h3
  },
  description: {
    color: Colors.text,
    fontSize: Fonts.size.small
  }
})
