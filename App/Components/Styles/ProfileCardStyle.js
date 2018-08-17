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
    position: 'absolute',
    top: Metrics.cards.candidatePictureOverflow,
    marginBottom: Metrics.section,
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    borderRadius: Metrics.images.logo / 2,
    ...Platform.select({
      ios: {
        shadowOffset: { width: 0, height: 1 },
        shadowColor: Colors.black,
        shadowOpacity: 0.3
      },
      android: {
        elevation: 2.1
      }
    })
  },
  pictureSpaceMargin: {
    height: 1,
    marginVertical: Metrics.cards.pictureSpaceMargin
  },
  picture: {
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    borderRadius: Metrics.images.logo / 2
  },
  name: {
    color: Colors.title,
    fontSize: Fonts.size.h3,
    fontWeight: 'bold'
  },
  text: {
    color: Colors.text,
    fontSize: Fonts.size.regular
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
    fontSize: Fonts.size.h1,
    color: Colors.yellow,
    fontWeight: 'bold'
  },
  role: {
    marginBottom: Metrics.doubleBaseMargin,
    fontSize: Fonts.size.input,
    color: Colors.yellow,
    fontWeight: 'bold'
  },
  buttonsContainer: {
    width: '100%',
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
    paddingLeft: Metrics.smallMargin
  }
})
