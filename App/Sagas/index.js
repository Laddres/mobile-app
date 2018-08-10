import { takeLatest, all } from 'redux-saga/effects'
import API from '../Services/Api'
import FixtureAPI from '../Services/FixtureApi'
import DebugConfig from '../Config/DebugConfig'

/* ------------- Types ------------- */

import { StartupTypes } from '../Redux/StartupRedux'
import { CandidatosTypes } from '../Redux/CandidatosRedux'

/* ------------- Sagas ------------- */

import { startup } from './StartupSagas'
import { getCandidatos } from './CandidatosSagas'

/* ------------- API ------------- */

const api = DebugConfig.useFixtures ? FixtureAPI : API.create()

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield all([
    takeLatest(StartupTypes.STARTUP, startup),
    takeLatest(CandidatosTypes.CANDIDATOS_REQUEST, getCandidatos, api)
  ])
}
