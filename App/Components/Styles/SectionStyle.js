import { StyleSheet } from 'react-native'
import { Colors, Fonts, Metrics } from '../../Themes'

export default StyleSheet.create({
  container: {
    marginTop: Metrics.section,
    marginLeft: Metrics.marginHorizontal
  },
  title: {
    fontWeight: 'bold',
    fontSize: Fonts.size.h1,
    color: Colors.sectionTitle
  },
  itens: {
    flexDirection: 'row',
    marginTop: Metrics.marginVertical
  }
})
