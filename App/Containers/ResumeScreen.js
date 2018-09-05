// @flow
import React, { Component } from 'react'
import { ScrollView, View, Image, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import {
  CandidateSelectors,
  CandidacySelectors,
  ProjectProposalsSelectors,
  SummarySelectors,
  LawsuitSelectors
} from '../Selectors'
import SummaryCard from '../Components/SummaryCard'
import ProfileCard from '../Components/ProfileCard'
import CandidacyCard from '../Components/CandidacyCard'
import { Images } from '../Themes'
import { resetAction } from '../Navigation/NavigationActions'
import { DEFAULT_NAVIGATION_CONFIG } from '../Navigation/NavigationConfig'
import { generateProjectProposalKey } from '../Lib/Utils'

// Styles
import styles from './Styles/ResumeScreenStyle'
import type { CandidateProfileType } from '../Redux/CandidateRedux'
import type { CandidacyType } from '../Redux/CandidacyRedux'
import type { ProjectsType } from '../Redux/ProjectProposalRedux'
import type { SummaryType } from '../Redux/SummaryRedux'
import type { LawsuitDataType } from '../Redux/LawsuitRedux'
import LawsuitsCard from '../Components/LawsuitsCard'

type Props = {
  goBack: () => mixed,
  fetchingCandidate: ?boolean,
  candidateProfile: CandidateProfileType,
  fetchingCandidacies: ?boolean,
  candidacties: CandidacyType,
  getProposals: string => ProjectsType,
  summary: SummaryType,
  fetchingSummary: ?boolean,
  lawsuits: LawsuitDataType,
  fetchingLawsuits: ?boolean
}

class ResumeScreen extends Component<Props> {
  // constructor (props) {
  //   super(props)
  //   this.state = {}
  // }

  render () {
    const {
      candidacies,
      candidateProfile,
      fetchingCandidacies,
      getProposals,
      summary,
      fetchingSummary,
      lawsuits,
      fetchingLawsuits
    } = this.props
    return (
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={this.props.goBack} style={styles.backButton}>
            <Image source={Images.arrowLeft} resizeMode={'contain'} style={styles.backImage} />
            <Text style={styles.backText}>Candidatos</Text>
          </TouchableOpacity>
          <Image source={Images.logo} resizeMode={'contain'} style={styles.logo} />
        </View>

        <ProfileCard candidate={candidateProfile} />

        {summary && <Text style={styles.sectionTitle}>RESUMO</Text>}
        {summary && <SummaryCard data={summary} fetching={fetchingSummary} />}

        {lawsuits && (
          <View style={styles.sectionTitleContainer}>
            <Text style={styles.sectionTitle}>PROCESSOS</Text>
            <View style={styles.SectionSubtitleContainer}>
              <Text style={styles.sectionSubtitle}>fornecido por </Text>
              <Image source={Images.vigieAqui} />
            </View>
          </View>
        )}
        {lawsuits && <LawsuitsCard lawsuits={lawsuits} fetching={fetchingLawsuits} />}

        {candidacies && candidacies.length > 0 && <Text style={styles.sectionTitle}>CANDIDATURAS</Text>}
        {candidacies &&
          candidacies.map(candidacy => {
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
    getProposals: key => ProjectProposalsSelectors.getProposals(state, key),
    summary: SummarySelectors.getSummary(state),
    fetchingSummary: SummarySelectors.fetching(state),
    lawsuits: LawsuitSelectors.getLawsuit(state),
    fetchingLawsuits: LawsuitSelectors.fetching(state)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    goBack: () => dispatch(resetAction(DEFAULT_NAVIGATION_CONFIG.mainScreenRouteName))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResumeScreen)
