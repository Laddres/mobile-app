import { createActions, createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  startup: null
})

export const StartupTypes = Types
export default Creators

/* ------------- Tipos Flow ------------- */

export type StartupState = Immutable<{
  openCount: number
}>

/* ------------- Estado Inicial ------------- */

export const INITIAL_STATE: StartupState = Immutable({
  openCount: 0
})

/* ------------- Redutores ------------- */

export const open = (state: StartupState) => state.merge({ openCount: state.openCount + 1 })

/* ------------- Conectar redutores aos tipos ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.STARTUP]: open
})
