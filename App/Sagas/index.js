import { takeLatest, takeEvery, all } from 'redux-saga/effects'
import API from '../Services/Api'
import FixtureAPI from '../Services/FixtureApi'
import DebugConfig from '../Config/DebugConfig'

/* ------------- Types ------------- */

import { StartupTypes } from '../Redux/StartupRedux'
import { CandidatosTypes } from '../Redux/CandidatosRedux'
import { CandidateTypes } from '../Redux/CandidateRedux'
import { CandidacyTypes } from '../Redux/CandidacyRedux'
import { ProjectProposalTypes } from '../Redux/ProjectProposalRedux'
import { SummaryTypes } from '../Redux/SummaryRedux'
import { LawsuitTypes } from '../Redux/LawsuitRedux'

/* ------------- Sagas ------------- */

import { startup } from './StartupSagas'
import { getCandidatos } from './CandidatosSagas'
import { getCandidateProfile } from './CandidateSagas'
import { getCandidacy } from './CandidacySagas'
import { getProjectProposal } from './ProjectProposalSagas'
import { getSummary } from './SummarySagas'
import { getLawsuits } from './LawsuitSagas'

/* ------------- API ------------- */

const api = DebugConfig.useFixtures ? FixtureAPI : API.create()

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield all([
    takeLatest(StartupTypes.STARTUP, startup),
    takeLatest(CandidatosTypes.CANDIDATOS_REQUEST, getCandidatos, api),
    takeLatest(SummaryTypes.SUMMARY_REQUEST, getSummary, api),
    takeLatest(CandidateTypes.CANDIDATE_REQUEST, getCandidateProfile, api),
    takeEvery(CandidacyTypes.CANDIDACY_REQUEST, getCandidacy, api),
    takeEvery(ProjectProposalTypes.PROJECT_PROPOSAL_REQUEST, getProjectProposal, api),
    takeLatest(LawsuitTypes.LAWSUIT_REQUEST, getLawsuits, api)
  ])
}
