// @flow
// noinspection ES6CheckImport
import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import { generateProjectProposalKey } from '../Lib/Utils'

/* ------------- Tipos e Criadores de ações ------------- */

const { Types, Creators } = createActions({
  projectProposalRequest: ['id', 'year', 'role'],
  projectProposalSuccess: ['key', 'data'],
  projectProposalFailure: ['key']
})

export const ProjectProposalTypes = Types
export default Creators

/* ------------- Tipos Flow ------------- */

export type ProjectType = {
  id: number,
  sigla: string,
  numero: number,
  ano: number,
  ementa: string,
  keywords: string,
  url: string
}

export type ProjectsType = {
  projetos: ProjectType[],
  totalProjetos: number,
  totalProposicoes: number
}

export type ProjectProposalState = Immutable<{
  data: { [string]: ProjectsType },
  fecthing: { [string]: ?boolean },
  error: { [string]: ?boolean }
}>

type requestType = { id: string, year: number, role: string }

/* ------------- Estado Inicial ------------- */

export const INITIAL_STATE: ProjectProposalState = Immutable({
  data: {},
  fetching: {},
  error: {}
})

/* ------------- Redutores ------------- */

export const request = (state: ProjectProposalState, { id, year, role }: requestType) => {
  const key = generateProjectProposalKey(id, year, role)
  return state.merge({ fetching: { [key]: true } }, { deep: true })
}

export const success = (state: ProjectProposalState, { key, data }: { key: string, data: ProjectsType }) =>
  state.merge(
    {
      fetching: { [key]: false },
      data: { [key]: data },
      error: { [key]: false }
    },
    { deep: true }
  )

export const failure = (state: ProjectProposalState, { key }: { key: string }) =>
  state.merge({ fetching: { [key]: false }, error: { [key]: true } }, { deep: true })

/* ------------- Conectar redutores aos tipos ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.PROJECT_PROPOSAL_REQUEST]: request,
  [Types.PROJECT_PROPOSAL_SUCCESS]: success,
  [Types.PROJECT_PROPOSAL_FAILURE]: failure
})
