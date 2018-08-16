import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../Themes'

export default StyleSheet.create({
  container: {
    width: Metrics.images.logo,
    height: Metrics.images.logo,
    borderRadius: 10,
    marginLeft: Metrics.doubleMarginHorizontal,
    marginVertical: Metrics.marginVertical
  },
  photo: {
    flex: 0.75,
    backgroundColor: 'white',
    borderTopLeftRadius: Metrics.borderRadius,
    borderTopRightRadius: Metrics.borderRadius
  },
  info: {
    justifyContent: 'center',
    paddingLeft: Metrics.marginHorizontal,
    backgroundColor: Colors.cardBackground,
    borderBottomLeftRadius: Metrics.borderRadius,
    borderBottomRightRadius: Metrics.borderRadius,
    flex: 0.25
  },
  textParty: {
    color: Colors.text
  },
  textName: {
    color: Colors.subtitle,
    fontWeight: 'bold'
  }
})
