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
import Share from 'react-native-share'
import ViewShot from 'react-native-view-shot'
import Messages from '../Config/Messages'

type Props = {
  candidate: CandidateProfileType
}

export default class ProfileCard extends React.Component<Props> {
  shareHandler = () => {
    this.refs.viewShot.capture().then(data => {
      console.tron.logImportant(data)
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

  render () {
    const { candidate } = this.props
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
              <ImageButton source={Images.share} onPress={this.shareHandler} style={styles.imageButton} />
              <View style={styles.likeContainer}>
                <Text style={styles.numberLikes}>0</Text>
                <ImageButton source={Images.outlineHeart} onPress={developmentAlert} style={styles.imageButton} />
              </View>
            </View>
          </CardContainer>
        </View>
      </ViewShot>
    )
  }
}
