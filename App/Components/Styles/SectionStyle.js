import { StyleSheet } from 'react-native'
import { Colors, Fonts, Metrics } from '../../Themes'

export default StyleSheet.create({
  container: {
    marginVertical: Metrics.section / 2
  },
  title: {
    fontWeight: 'bold',
    fontSize: Fonts.size.h1,
    color: Colors.sectionTitle,
    lineHeight: Fonts.size.h1,
    marginHorizontal: Metrics.marginHorizontal
  },
  itens: {
    flexDirection: 'row',
    marginTop: Metrics.marginVertical
  },
  itensContent: {
    paddingHorizontal: Metrics.marginHorizontal
  }
})
