// @flow
import * as React from 'react'
import { TouchableOpacity, View, Text, Image } from 'react-native'
import styles from './Styles/IssueItemStyle'
import Separator from './Separator'
import { Images } from '../Themes'

type Props = {
  issue: any,
  separator?: boolean,
  onPress: () => void
}

export default class IssueItem extends React.Component<Props> {
  get icon (): { uri: string } {
    switch (this.props.issue.posicao) {
      case -2:
        return Images.votedAgainst
      case -1:
        return Images.opposite
      case 0:
        return Images.undefined
      case 1:
        return Images.favorable
      case 2:
        return Images.votedFor
    }
  }

  render () {
    const { issue, separator, onPress } = this.props
    return (
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <View style={styles.content}>
          <View>
            {!!issue.sigla && <Text style={styles.title}>{`${issue.sigla} ${issue.numero}/${issue.ano}`}</Text>}
            <Text style={styles.subtitle}>{issue.titulo}</Text>
          </View>
          <Image source={this.icon} style={styles.icon} />
        </View>
        {separator && <Separator style={styles.separator} />}
      </TouchableOpacity>
    )
  }
}
