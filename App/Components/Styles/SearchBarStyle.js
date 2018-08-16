import { StyleSheet } from 'react-native'

export const SUGGESTION_BOX_HEIGHT = 46

export default StyleSheet.create({
  container: {
    flex: 1
  },
  textInput: {
    height: 46,
    color: '#424242',
    fontFamily: 'Roboto-Regular',
    fontSize: 15,
    paddingLeft: 41,
    paddingRight: 14
  },
  disabledTextInput: {
    backgroundColor: 'rgba(92, 128, 136, 0.09)',
    borderColor: 'transparent'
  },
  iconContainer: {
    position: 'absolute',
    top: 0,
    left: 14,
    bottom: 0,
    justifyContent: 'center'
  },
  suggestions: {
    position: 'absolute',
    top: 45,
    left: 0,
    right: 0,
    maxHeight: 2.5 * SUGGESTION_BOX_HEIGHT,
    borderRadius: 3,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: 'rgba(92,128,136,0.2)'
  },
  suggestionBox: {
    borderBottomWidth: 1,
    borderColor: 'rgba(92,128,136,0.2)',
    height: SUGGESTION_BOX_HEIGHT,
    justifyContent: 'center',
    paddingHorizontal: 14
  },
  suggestion: {
    color: '#424242',
    fontFamily: 'Roboto-Regular',
    fontSize: 15
  }
})
