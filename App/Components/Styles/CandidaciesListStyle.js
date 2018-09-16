import { StyleSheet } from 'react-native'
import { Colors, Fonts, Metrics } from '../../Themes'

export default StyleSheet.create({
  message: {
    color: Colors.text,
    textAlign: 'center',
    marginTop: Metrics.baseMargin,
    fontSize: Fonts.size.medium,
    fontWeight: Fonts.weight.regular,
    paddingHorizontal: Metrics.marginHorizontal
  }
})
