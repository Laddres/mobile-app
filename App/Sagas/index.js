import { takeLatest, takeEvery, all } from 'redux-saga/effects'
import API from '../Services/Api'
import GoogleAPIs from '../Services/GoogleApis'
import FixtureAPI from '../Services/FixtureApi'
import DebugConfig from '../Config/DebugConfig'

/* ------------- Types ------------- */

import { StartupTypes } from '../Redux/StartupRedux'
import { candidatesTypes } from '../Redux/CandidatesRedux'
import { CandidateTypes } from '../Redux/CandidateRedux'
import { CandidacyTypes } from '../Redux/CandidacyRedux'
import { ProjectProposalTypes } from '../Redux/ProjectProposalRedux'
import { SummaryTypes } from '../Redux/SummaryRedux'
import { LawsuitTypes } from '../Redux/LawsuitRedux'
import { LikeTypes } from '../Redux/LikeRedux'
import { SecretTypes } from '../Redux/SecretRedux'
import { SearchFiltersTypes } from '../Redux/SearchFiltersRedux'

/* ------------- Sagas ------------- */

import { startup } from './StartupSagas'
import { getCandidates } from './CandidatesSagas'
import { getCandidateProfile } from './CandidateSagas'
import { getCandidacy } from './CandidacySagas'
import { getProjectProposal } from './ProjectProposalSagas'
import { getSummary } from './SummarySagas'
import { getLawsuits } from './LawsuitSagas'
import { getLikes, likeOrUnlike } from './LikeSagas'
import { getSecret } from './SecretSagas'
import { getState } from './SearchFiltersSagas'

/* ------------- API ------------- */

const api = DebugConfig.useFixtures ? FixtureAPI : API.create()
const googleAPI = DebugConfig.useFixtures ? FixtureAPI : GoogleAPIs.create()

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield all([
    takeLatest(StartupTypes.STARTUP, startup),
    takeLatest(candidatesTypes.CANDIDATES_REQUEST, getCandidates, api),
    takeLatest(SummaryTypes.SUMMARY_REQUEST, getSummary, api),
    takeLatest(CandidateTypes.CANDIDATE_REQUEST, getCandidateProfile, api),
    takeEvery(CandidacyTypes.CANDIDACY_REQUEST, getCandidacy, api),
    takeEvery(ProjectProposalTypes.PROJECT_PROPOSAL_REQUEST, getProjectProposal, api),
    takeEvery(LikeTypes.LIKE_REQUEST, getLikes, api),
    takeEvery(LikeTypes.REQUEST_LIKE_OR_UNLIKE, likeOrUnlike, api),
    takeLatest(LawsuitTypes.LAWSUIT_REQUEST, getLawsuits, api),
    takeLatest(SecretTypes.SECRET_REQUEST, getSecret, api),
    takeLatest(SearchFiltersTypes.SEARCH_FILTERS_REQUEST_STATE, getState, googleAPI)
  ])
}
