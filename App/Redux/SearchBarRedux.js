// @flow
// noinspection ES6CheckImport
import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Tipos e Criadores de ações ------------- */

const { Types, Creators } = createActions({
  searchBarChange: ['query']
})

export const SearchBarTypes = Types
export default Creators

/* ------------- Tipos Flow ------------- */

export type SearchBarState = Immutable<{
  query: string
}>

/* ------------- Estado Inicial ------------- */

export const INITIAL_STATE: SearchBarState = Immutable({
  query: ''
})

/* ------------- Redutores ------------- */

export const change = (state: SearchBarState, { query }: { query: string }) => state.merge({ query })

/* ------------- Conectar redutores aos tipos ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SEARCH_BAR_CHANGE]: change
})
