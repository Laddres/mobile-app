// @flow
import React, { Component } from 'react'
import { ScrollView, View, Image, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { CandidateSelectors, CandidacySelectors, ProjectProposalsSelectors } from '../Selectors'
import ProfileCard from '../Components/ProfileCard'
import CandidacyCard from '../Components/CandidacyCard'
import { Images } from '../Themes'

// Styles
import styles from './Styles/ResumeScreenStyle'
import type { CandidateProfileType } from '../Redux/CandidateRedux'
import type { CandidacyType } from '../Redux/CandidacyRedux'
import { ProjectsType } from '../Redux/ProjectProposalRedux'
import { generateProjectProposalKey } from '../Lib/Utils'

type Props = {
  navigation: any,
  fetchingCandidate: ?boolean,
  candidateProfile: CandidateProfileType,
  fetchingCandidacies: ?boolean,
  candidacties: CandidacyType,
  getProposals: string => ProjectsType
}

class ResumeScreen extends Component<Props> {
  // constructor (props) {
  //   super(props)
  //   this.state = {}
  // }

  render () {
    const { candidateProfile, navigation, fetchingCandidacies, getProposals } = this.props
    return (
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Image source={Images.arrowLeft} resizeMode={'contain'} style={styles.backImage} />
            <Text style={styles.backText}>Candidatos</Text>
          </TouchableOpacity>
          <Image source={Images.logo} resizeMode={'contain'} style={styles.logo} />
        </View>
        <ProfileCard candidate={candidateProfile} />
        {this.props.candidacies &&
          this.props.candidacies.map(candidacy => {
            const key = generateProjectProposalKey(candidacy.idCandidato, candidacy.anoEleicao, candidacy.cargo)
            return (
              <CandidacyCard
                candidacy={candidacy}
                projectProposals={getProposals(key)}
                key={key}
                fetching={fetchingCandidacies}
              />
            )
          })}
      </ScrollView>
    )
  }
}

const mapStateToProps = state => {
  return {
    fetchingCandidate: CandidateSelectors.fetchingCandidate(state),
    candidateProfile: CandidateSelectors.getSelectedCandidate(state),
    fetchingCandidacies: CandidacySelectors.fetchingCandidacies(state),
    candidacies: CandidacySelectors.getCandidacies(state),
    getProposals: key => ProjectProposalsSelectors.getProposals(state, key)
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResumeScreen)
