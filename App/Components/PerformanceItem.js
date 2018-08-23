// @flow
import * as React from 'react'
import { View, Text } from 'react-native'
import styles from './Styles/PerformanceItemStyle'
import ImageButton from './ImageButton'
import Separator from './Separator'

type Props = {
  title: string,
  description: string,
  icon?: { uri: string } | number,
  onPressIcon?: () => void,
  separator?: boolean
}

export default class PerformanceItem extends React.Component<Props> {
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  render () {
    const { title, description, icon, onPressIcon, separator } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>{title}</Text>
          {icon && <ImageButton source={icon} onPress={onPressIcon} />}
        </View>
        <Text style={styles.description}>{description}</Text>
        {separator && <Separator style={styles.separator} />}
      </View>
    )
  }
}
