import { takeLatest, all } from 'redux-saga/effects'
import API from '../Services/Api'
import FixtureAPI from '../Services/FixtureApi'
import DebugConfig from '../Config/DebugConfig'

/* ------------- Types ------------- */

import { StartupTypes } from '../Redux/StartupRedux'
import { CandidatosTypes } from '../Redux/CandidatosRedux'
import { CandidateTypes } from '../Redux/CandidateRedux'
import { CandidacyTypes } from '../Redux/CandidacyRedux'

/* ------------- Sagas ------------- */

import { startup } from './StartupSagas'
import { getCandidatos } from './CandidatosSagas'
import { getCandidateProfile } from './CandidateSagas'
import { getCandidacy } from './CandidacySagas'

/* ------------- API ------------- */

const api = DebugConfig.useFixtures ? FixtureAPI : API.create()

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield all([
    takeLatest(StartupTypes.STARTUP, startup),
    takeLatest(CandidatosTypes.CANDIDATOS_REQUEST, getCandidatos, api),
    takeLatest(CandidateTypes.CANDIDATE_REQUEST, getCandidateProfile, api),
    takeLatest(CandidacyTypes.CANDIDACY_REQUEST, getCandidacy, api)
  ])
}
