import { StyleSheet } from 'react-native'
import { Metrics, Fonts, Colors } from '../../Themes'

export default StyleSheet.create({
  container: {
    paddingHorizontal: Metrics.smallMargin
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: Metrics.marginVertical
  },
  headerText: {
    paddingTop: Metrics.smallMargin,
    flex: 9
  },
  title: {
    maxWidth: '100%',
    color: Colors.title,
    fontSize: Fonts.size.small
  },
  subtitle: {
    maxWidth: '100%',
    color: Colors.text,
    fontSize: Fonts.size.medium
  },
  headerIcon: {
    flex: 1
  },
  imageButton: {
    padding: Metrics.marginVertical
  },
  description: {
    color: Colors.text,
    fontStyle: 'italic',
    fontSize: Fonts.size.small,
    marginBottom: Metrics.marginVertical
  },
  separator: {
    marginVertical: Metrics.smallMargin
  }
})
