import { StyleSheet } from 'react-native'
import { Colors, Fonts, Metrics } from '../../Themes'

export default StyleSheet.create({
  container: {
    width: 125,
    height: 210,
    borderRadius: Metrics.borderRadius,
    marginHorizontal: 0.015 * Metrics.screenWidth,
    overflow: 'hidden'
  },
  photo: {
    flex: 0.7
  },
  info: {
    justifyContent: 'center',
    paddingHorizontal: Metrics.marginHorizontal,
    backgroundColor: Colors.cardBackground,
    flex: 0.3
  },
  textParty: {
    color: Colors.title,
    fontSize: Fonts.size.small
  },
  textName: {
    color: Colors.subtitle,
    fontSize: Fonts.size.small,
    fontWeight: Fonts.weight.medium
  }
})
