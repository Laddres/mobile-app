// @flow
import React, { Component } from 'react'
import { ScrollView, View, Image, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import {
  CandidateSelectors,
  CandidacySelectors,
  ProjectProposalsSelectors,
  SummarySelectors,
  LikeSelectors,
  LawsuitSelectors
} from '../Selectors'
import SummaryCard from '../Components/SummaryCard'
import ProfileCard from '../Components/ProfileCard'
import { Images } from '../Themes'
import { resetAction } from '../Navigation/NavigationActions'
import { DEFAULT_NAVIGATION_CONFIG } from '../Navigation/NavigationConfig'
import LikeActions from '../Redux/LikeRedux'

// Styles
import styles from './Styles/ResumeScreenStyle'
import type { CandidateProfileType } from '../Redux/CandidateRedux'
import type { CandidacyType } from '../Redux/CandidacyRedux'
import type { ProjectsType } from '../Redux/ProjectProposalRedux'
import type { SummaryType } from '../Redux/SummaryRedux'
import type { LawsuitDataType } from '../Redux/LawsuitRedux'
import LawsuitsCard from '../Components/LawsuitsCard'
import CandidaciesList from '../Components/CandidaciesList'

type Props = {
  goBack: () => mixed,
  fetchingCandidate: ?boolean,
  candidateProfile: CandidateProfileType,
  fetchingCandidacies: ?boolean,
  candidacties: CandidacyType,
  getProposals: string => ProjectsType,
  summary: SummaryType,
  fetchingSummary: ?boolean,
  numberOfLikes: number,
  hasLikedCandidate: ?boolean,
  likeOrUnlike: string => mixed,
  lawsuits: LawsuitDataType,
  fetchingLawsuits: ?boolean
}

class ResumeScreen extends Component<Props> {
  render () {
    const {
      candidacies,
      candidateProfile,
      fetchingCandidacies,
      getProposals,
      summary,
      fetchingSummary,
      hasLikedCandidate,
      likeOrUnlike,
      numberOfLikes,
      lawsuits,
      fetchingLawsuits
    } = this.props
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={[styles.largeContainer, styles.header]}>
          <TouchableOpacity onPress={this.props.goBack} style={styles.backButton}>
            <Image source={Images.arrowLeft} resizeMode={'contain'} style={styles.backImage} />
            <Text style={styles.backText}>Candidatos</Text>
          </TouchableOpacity>
          <Image source={Images.logo} resizeMode={'contain'} style={styles.logo} />
        </View>

        <View style={styles.largeContainer}>
          <ProfileCard
            candidate={candidateProfile}
            hasLiked={hasLikedCandidate}
            numberOfLikes={numberOfLikes}
            onLikeOrUnlike={likeOrUnlike}
          />
        </View>

        {summary && <Text style={styles.sectionTitle}>RESUMO</Text>}
        <View style={styles.shortContainer}>
          {summary && <SummaryCard data={summary} fetching={fetchingSummary} />}
        </View>

        {lawsuits && (
          <View style={styles.sectionTitleContainer}>
            <Text style={styles.sectionTitle}>PROCESSOS</Text>
            <View style={styles.SectionSubtitleContainer}>
              <Text style={styles.sectionSubtitle}>fornecido por </Text>
              <Image source={Images.vigieAqui} />
            </View>
          </View>
        )}
        <View style={styles.largeContainer}>
          {lawsuits && <LawsuitsCard lawsuits={lawsuits} fetching={fetchingLawsuits} />}
        </View>

        <Text style={styles.sectionTitle}>CANDIDATURAS</Text>
        {candidacies && (
          <View style={styles.shortContainer}>
            <CandidaciesList
              candidateName={candidateProfile.nomeUrna}
              fetching={fetchingCandidacies}
              candidacies={candidacies}
              getProposals={getProposals}
            />
          </View>
        )}
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
    hasLikedCandidate: LikeSelectors.hasLiked(state),
    numberOfLikes: LikeSelectors.getLikes(state),
    lawsuits: LawsuitSelectors.getLawsuit(state),
    fetchingLawsuits: LawsuitSelectors.fetching(state)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    goBack: () => dispatch(resetAction(DEFAULT_NAVIGATION_CONFIG.mainScreenRouteName)),
    likeOrUnlike: idCandidate => dispatch(LikeActions.requestLikeOrUnlike(idCandidate))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResumeScreen)
