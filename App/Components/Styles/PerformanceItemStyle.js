import { StyleSheet } from 'react-native'
import { Metrics, Fonts, Colors } from '../../Themes'

export default StyleSheet.create({
  container: {
    paddingHorizontal: Metrics.marginHorizontal,
    marginTop: Metrics.smallMargin
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: Metrics.smallMargin
  },
  title: {
    maxWidth: '100%',
    color: Colors.title,
    fontSize: Fonts.size.medium
  },
  subtitle: {
    maxWidth: '100%',
    color: Colors.text,
    fontSize: Fonts.size.regular
  },
  description: {
    color: Colors.text,
    fontStyle: 'italic',
    fontSize: Fonts.size.medium
  },
  separator: {
    marginVertical: Metrics.smallMargin
  }
})
