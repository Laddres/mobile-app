// @flow
import * as React from 'react'
import { View, TouchableOpacity } from 'react-native'
import styles from './Styles/OptionSelectorStyle'

type Props = {
  selected: boolean,
  onSelect: () => mixed
}

export default class OptionSelector extends React.Component<Props> {
  render () {
    const { selected, onSelect } = this.props
    return (
      <TouchableOpacity style={[styles.container, selected && styles.selected]} onPress={onSelect}>
        <View style={styles.circle} />
      </TouchableOpacity>
    )
  }
}
