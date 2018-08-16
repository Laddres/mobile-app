// @flow
import React, { Component } from 'react'
import { TouchableOpacity, View, Image, Text } from 'react-native'
import styles from './Styles/CandidatePreviewCardStyles'

type Props = {
  name: string,
  party: string,
  imgSrc: number | { uri: string }
}

class CandidatePreviewCard extends Component<Props> {
  render () {
    const Photo = this.props.imgScr ? Image : View
    return (
      <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
        <Photo src={this.props.imgSrc} style={styles.photo} />
        <View style={styles.info}>
          <Text style={styles.textParty}>{this.props.party}</Text>
          <Text style={styles.textName}>{this.props.name}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

export default CandidatePreviewCard
