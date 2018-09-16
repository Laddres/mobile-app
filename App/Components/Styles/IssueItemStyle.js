import { StyleSheet } from 'react-native'
import { Colors, Fonts, Metrics } from '../../Themes'

export default StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: Metrics.smallMargin
  },
  content: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: Metrics.smallMargin
  },
  title: {
    color: Colors.title,
    fontSize: Fonts.size.small
  },
  subtitle: {
    color: Colors.text,
    fontSize: Fonts.size.medium
  },
  separator: {
    marginVertical: Metrics.smallMargin
  }
})
