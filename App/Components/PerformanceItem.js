// @flow
import * as React from 'react'
import { View, Text } from 'react-native'
import styles from './Styles/PerformanceItemStyle'
import ImageButton from './ImageButton'
import Separator from './Separator'
import _ from 'lodash'

type Props = {
  title: string,
  subtitle: string,
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
    const { title, subtitle, description, icon, onPressIcon, separator } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View>
            <Text style={styles.title}>{title}</Text>
            {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
          </View>
          {icon && <ImageButton source={icon} onPress={onPressIcon} style={styles.imageButton} />}
        </View>
        <Text style={styles.description}>{_.truncate(description, { length: 200 })}</Text>
        {separator && <Separator style={styles.separator} />}
      </View>
    )
  }
}
