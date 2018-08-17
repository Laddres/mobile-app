// @flow
import * as React from 'react'
import { View } from 'react-native'
import styles from './Styles/SeparatorStyle'
import { Colors } from '../Themes'

import type { StyleObj } from 'react-native/Libraries/StyleSheet/StyleSheetTypes'

type Props = {
  color?: string,
  style?: StyleObj
}

export default class Separator extends React.Component<Props> {
  // // Defaults for props
  static defaultProps = {
    color: Colors.separator
  }

  render () {
    const { color, style } = this.props
    return <View style={[styles.container, { backgroundColor: color }, style]} />
  }
}
