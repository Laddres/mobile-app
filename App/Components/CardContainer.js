// @flow
import * as React from 'react'
import { View } from 'react-native'
import styles from './Styles/CardContainerStyle'

type Props = {
  children: React.Node | React.Node[]
}

export default class CardContainer extends React.Component<Props> {
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  render () {
    return <View style={styles.container}>{this.props.children}</View>
  }
}
