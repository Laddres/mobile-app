import { Platform, StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../Themes'

export default StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Metrics.doubleSection
  },
  picContainer: {
    backgroundColor: 'yellow',
    position: 'absolute',
    zIndex: 1,
    top: Metrics.cards.candidatePictureOverflow,
    marginBottom: Metrics.section,
    height: 0.4 * Metrics.screenWidth,
    width: 0.4 * Metrics.screenWidth,
    borderRadius: (0.4 * Metrics.screenWidth) / 2,
    ...Platform.select({
      ios: {
        shadowOffset: { width: 0, height: 4 },
        shadowColor: Colors.text,
        shadowOpacity: 0.1
      },
      android: {
        elevation: 2
      }
    })
  },
  pictureSpaceMargin: {
    height: 1,
    marginVertical: 0.2 * Metrics.screenWidth - 20 + 10
  },
  picture: {
    height: 0.4 * Metrics.screenWidth,
    width: 0.4 * Metrics.screenWidth,
    borderRadius: (0.4 * Metrics.screenWidth) / 2
  },
  name: {
    color: Colors.text,
    fontSize: Fonts.size.h5,
    fontWeight: 'bold'
  },
  text: {
    color: Colors.text,
    fontSize: Fonts.size.medium,
    textAlign: 'center'
  },
  age: {
    color: Colors.title,
    fontSize: Fonts.size.small
  },
  location: {
    color: Colors.subtitle,
    fontSize: Fonts.size.small,
    fontWeight: Fonts.weight.medium
  },
  bold: {
    fontWeight: 'bold'
  },
  marginVerticalSeparator: {
    height: 1,
    marginVertical: Metrics.cards.marginVerticalSeparator
  },
  number: {
    marginTop: Metrics.section,
    fontSize: Fonts.size.h2,
    color: Colors.yellow,
    fontWeight: 'bold'
  },
  role: {
    marginBottom: 40,
    fontSize: Fonts.size.medium,
    color: Colors.yellow,
    fontWeight: Fonts.weight.regular
  },
  buttonsContainer: {
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  likeContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  numberLikes: {
    fontSize: Fonts.size.small,
    color: Colors.text
  },
  imageButton: {
    paddingVertical: Metrics.marginVertical,
    paddingHorizontal: Metrics.smallMargin
  }
})
