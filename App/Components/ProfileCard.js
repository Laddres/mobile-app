// @flow
import * as React from 'react'
import { Image, View, Text } from 'react-native'
import styles from './Styles/ProfileCardStyle'
import CardContainer from './CardContainer'
import Separator from './Separator'
import ImageButton from './ImageButton'
import { developmentAlert } from '../Lib/Utils'
import { Images } from '../Themes'
import type { CandidateProfileType } from '../Redux/CandidateRedux'
import _ from 'lodash'

type Props = {
  candidate: CandidateProfileType,
  hasLiked: ?boolean,
  numberOfLikes: number,
  onLikeOrUnlike: string => mixed
}

export default class ProfileCard extends React.Component<Props> {
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  render () {
    const { candidate, hasLiked, onLikeOrUnlike, numberOfLikes } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.picContainer}>
          <Image source={{ uri: candidate.foto }} resizeMode={'cover'} style={styles.picture} />
        </View>
        <CardContainer>
          <View style={styles.pictureSpaceMargin} />
          <Text style={styles.name}>{candidate.nomeUrna}</Text>
          <Text style={styles.text}>{candidate.nome}</Text>
          <View style={styles.marginVerticalSeparator} />
          <Text style={styles.age}>
            {`${candidate.idade.toUpperCase()} • ${candidate.grauInstrucao.toUpperCase()}`}
          </Text>
          <Text style={styles.location}>{`${candidate.cidadeNatal}, ${candidate.estadoNatal}`}</Text>
          <Text style={styles.number}>{candidate.numero}</Text>
          <Text style={styles.role}>{candidate.cargo.toUpperCase()}</Text>
          <Separator />
          <View style={styles.buttonsContainer}>
            <ImageButton source={Images.share} onPress={developmentAlert} style={styles.imageButton} />
            <View style={styles.likeContainer}>
              <Text style={styles.numberLikes}>{_.isFinite(numberOfLikes) ? numberOfLikes : '--'}</Text>
              <ImageButton
                onPress={() => onLikeOrUnlike(candidate.id)}
                style={styles.imageButton}
                source={hasLiked ? Images.filledHeart : Images.outlineHeart}
              />
            </View>
          </View>
        </CardContainer>
      </View>
    )
  }
}
