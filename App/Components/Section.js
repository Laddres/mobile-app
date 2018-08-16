// @flow
import * as React from 'react'
import { ScrollView, View, Text } from 'react-native'
import styles from './Styles/SectionStyle'

type Props = {
  title: string,
  children: React.Node | React.Node[]
}

export default class Section extends React.Component<Props> {
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.props.title.toUpperCase()}</Text>
        <ScrollView horizontal bounces showsHorizontalScrollIndicator={false} style={styles.itens}>
          {this.props.children}
        </ScrollView>
      </View>
    )
  }
}
