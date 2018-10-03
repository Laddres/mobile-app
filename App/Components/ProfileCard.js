// @flow
import * as React from 'react'
import { Platform, Image, View, Text, Share as RNShare, TouchableOpacity } from 'react-native'
import styles from './Styles/ProfileCardStyle'
import CardContainer from './CardContainer'
import Separator from './Separator'
import ImageButton from './ImageButton'
import { Images } from '../Themes'
import type { CandidateProfileType } from '../Redux/CandidateRedux'
import ViewShot from 'react-native-view-shot'
import Messages from '../Config/Messages'
import Share from 'react-native-share'
import _ from 'lodash'

type Props = {
  candidate: CandidateProfileType,
  hasLiked: ?boolean,
  numberOfLikes: number,
  onLikeOrUnlike: string => mixed
}

export default class ProfileCard extends React.Component<Props> {
  shareHandlerAndroida = () => {
    this.refs.viewShot.capture().then(data => {
      Share.open({
        title: Messages.shareTitle,
        message: Messages.shareMessage(this.props.candidate.nomeUrna),
        subject: Messages.shareSubject,
        url: data
      }).catch(err => {
        err && console.log(err)
      })
    })
  }

  shareHandlerIOS = () => {
    RNShare.share(
      {
        title: Messages.shareTitle,
        message: Messages.shareMessage(this.props.candidate.nomeUrna)
      },
      {
        subject: Messages.shareSubject
      }
    )
  }

  render () {
    const { candidate, hasLiked, onLikeOrUnlike, numberOfLikes } = this.props
    return (
      <ViewShot ref='viewShot' options={{ format: 'png' }} style={styles.viewShotBackground}>
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
            {candidate.cidadeNatal &&
              candidate.estadoNatal && (
                <Text style={styles.location}>{`${candidate.cidadeNatal}, ${candidate.estadoNatal}`}</Text>
              )}
            <Text style={styles.number}>{candidate.numero}</Text>
            <Text style={styles.role}>{candidate.cargo.toUpperCase()}</Text>
            <Separator />
            <View style={styles.buttonsContainer}>
              <TouchableOpacity
                onPress={Platform.OS === 'ios' ? this.shareHandlerIOS : this.shareHandlerAndroida}
                style={styles.shareContainer}
              >
                <Image source={Images.share} style={styles.imageButton} />
                <Text style={styles.shareText}>COMPARTILHE</Text>
              </TouchableOpacity>
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
      </ViewShot>
    )
  }
}
