import { call, put } from 'redux-saga/effects'
import CandidacyActions from '../Redux/CandidacyRedux'
import ProjectProposalActions from '../Redux/ProjectProposalRedux'

export function * getCandidacy (api, { id }) {
  const response = yield call(api.getCandidacy, id)

  if (response.ok) {
    yield fetchProposalsFromElectedCandidaciesInRoleDeputadoFederal(response.data)
    yield put(CandidacyActions.candidacySuccess(id, response.data || []))
  } else {
    yield put(CandidacyActions.candidacyFailure(id))
  }
}

function * fetchProposalsFromElectedCandidaciesInRoleDeputadoFederal (candidacies) {
  const electedCandidacies = candidacies.filter(candidacy => {
    if (!candidacy.resultado) {
      return
    }
    const electedResult = ['ELEITO', 'ELEITO POR QP']
    const wasElected = electedResult.indexOf(candidacy.resultado.toUpperCase()) !== -1
    const roleOfDeputadoFederal = candidacy.cargo.toUpperCase() === 'DEPUTADO FEDERAL'
    return wasElected && roleOfDeputadoFederal
  })

  for (const candidacy of electedCandidacies) {
    if (candidacy) {
      yield put(
        ProjectProposalActions.projectProposalRequest(candidacy.idCandidato, candidacy.anoEleicao, candidacy.cargo)
      )
    }
  }
}
