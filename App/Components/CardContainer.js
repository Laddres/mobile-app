// @flow
import * as React from 'react'
import { View, ActivityIndicator } from 'react-native'
import styles from './Styles/CardContainerStyle'
import { Colors } from '../Themes'

type Props = {
  fetching?: boolean,
  children: React.Node | React.Node[]
}

export default class CardContainer extends React.Component<Props> {
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  render () {
    const { fetching, children } = this.props
    return (
      <View style={styles.container}>
        {fetching && (
          <View style={styles.fetchingContainer}>
            <ActivityIndicator color={Colors.text} size={'large'} />
          </View>
        )}
        {children}
      </View>
    )
  }
}
