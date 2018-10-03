import { call, put } from 'redux-saga/effects'
import ProjectProposalActions from '../Redux/ProjectProposalRedux'
import { generateProjectProposalKey } from '../Lib/Utils'

export function * getProjectProposal (api, { id, year, role }) {
  const response = yield call(api.getProjectProposal, id, year, role)
  const key = generateProjectProposalKey(id, year, role)

  if (response.ok) {
    yield put(ProjectProposalActions.projectProposalSuccess(key, response.data))
  } else {
    yield put(ProjectProposalActions.projectProposalFailure(key))
  }
}
