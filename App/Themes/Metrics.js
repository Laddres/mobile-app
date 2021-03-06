import { Dimensions, Platform } from 'react-native'

const { width, height } = Dimensions.get('window')

const metrics = {
  marginHorizontal: 10,
  doubleMarginHorizontal: 25,
  marginVertical: 10,
  section: 30,
  baseMargin: 20,
  doubleBaseMargin: 20,
  smallMargin: 5,
  doubleSection: 50,
  horizontalLineHeight: 1,
  borderRadius: 10,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  navBarHeight: Platform.OS === 'ios' ? 64 : 54,
  buttonRadius: 4,
  smallPadding: 5,
  basePadding: 10,
  regularPadding: 15,
  doublePadding: 20,
  icons: {
    tiny: 15,
    small: 20,
    medium: 30,
    large: 45,
    xl: 50
  },
  images: {
    small: 18,
    medium: 50,
    large: 60,
    logo: 200
  },
  cards: {
    padding: 10,
    borderRadius: 12,
    minHeight: 200,
    marginVerticalSeparator: 7.5,
    pictureSpaceMargin: 80,
    candidatePictureOverflow: -20
  },
  headerHeight: 40,
  optionSelector: {
    width: 47,
    height: 28,
    circle: 26
  }
}

export default metrics
