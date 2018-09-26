import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import configureStore from './CreateStore'
import rootSaga from '../Sagas/'
import ReduxPersist from '../Config/ReduxPersist'

/* ------------- Assemble The Reducers ------------- */
export const reducers = combineReducers({
  startup: require('./StartupRedux').reducer,
  secret: require('./SecretRedux').reducer,
  nav: require('./NavigationRedux').reducer,
  searchBar: require('./SearchBarRedux').reducer,
  searchFilters: require('./SearchFiltersRedux').reducer,
  candidates: require('./CandidatesRedux').reducer,
  candidate: require('./CandidateRedux').reducer,
  candidacy: require('./CandidacyRedux').reducer,
  projectProposal: require('./ProjectProposalRedux').reducer,
  summary: require('./SummaryRedux').reducer,
  likes: require('./LikeRedux').reducer,
  lawsuit: require('./LawsuitRedux').reducer
})

export default () => {
  let finalReducers = reducers
  // If rehydration is on use persistReducer otherwise default combineReducers
  if (ReduxPersist.active) {
    const persistConfig = ReduxPersist.storeConfig
    finalReducers = persistReducer(persistConfig, reducers)
  }

  let { store, sagasManager, sagaMiddleware } = configureStore(finalReducers, rootSaga)

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('./').reducers
      store.replaceReducer(nextRootReducer)

      const newYieldedSagas = require('../Sagas').default
      sagasManager.cancel()
      sagasManager.done.then(() => {
        sagasManager = sagaMiddleware.run(newYieldedSagas)
      })
    })
  }

  return store
}
