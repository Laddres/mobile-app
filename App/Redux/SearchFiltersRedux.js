// @flow
// noinspection ES6CheckImport
import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Tipos e Criadores de ações ------------- */

const { Types, Creators } = createActions({
  searchFiltersRequestState: ['coordinates'],
  searchFiltersSuccessState: ['stateInitials'],
  searchFiltersFailureState: null,
  searchFiltersSetState: ['stateInitials']
})

export const SearchFiltersTypes = Types
export default Creators

/* ------------- Tipos Flow ------------- */

export type SearchFiltersState = Immutable<{
  state: string,
  fetching: ?boolean,
  error: ?boolean
}>

/* ------------- Estado Inicial ------------- */

export const INITIAL_STATE: SearchFiltersState = Immutable({
  state: '',
  fetching: null,
  error: null
})

/* ------------- Redutores ------------- */

export const requestState = (state: SearchFiltersState) => state.merge({ fetching: true })

export const successState = (state: SearchFiltersState, { stateInitials }: { stateInitials: string }) =>
  state.merge({ fetching: false, error: null, state: stateInitials })

export const failureState = (state: SearchFiltersState) => state.merge({ fetching: false, error: true })

export const setState = (state: SearchFiltersState, { stateInitials }: { stateInitials: string }) =>
  state.merge({ state: stateInitials })

/* ------------- Conectar redutores aos tipos ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SEARCH_FILTERS_REQUEST_STATE]: requestState,
  [Types.SEARCH_FILTERS_SUCCESS_STATE]: successState,
  [Types.SEARCH_FILTERS_FAILURE_STATE]: failureState,
  [Types.SEARCH_FILTERS_SET_STATE]: setState
})
