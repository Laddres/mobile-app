import { StyleSheet } from 'react-native'
import { Metrics, Colors } from '../../Themes'

export default StyleSheet.create({
  container: {
    paddingHorizontal: 2,
    width: Metrics.optionSelector.width,
    height: Metrics.optionSelector.height,
    backgroundColor: Colors.cardBackground,
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderRadius: Metrics.optionSelector.width / 2
  },
  selected: {
    alignItems: 'flex-end',
    backgroundColor: Colors.selectedItem
  },
  circle: {
    backgroundColor: Colors.white,
    width: Metrics.optionSelector.circle,
    height: Metrics.optionSelector.circle,
    borderRadius: Metrics.optionSelector.circle / 2
  }
})
