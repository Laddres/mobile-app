// @flow
import { createSelector } from 'reselect'
import { generateSearchFilterKey } from '../Lib/Utils'

const getStateInitials = (state: any) => state.searchFilters.options.state
const getRaceOrColor = state => state.searchFilters.options.raceOrColor
const getGender = state => state.searchFilters.options.gender
const getFavorites = state => state.searchFilters.options.favorites
const getFirstCandidacy = state => state.searchFilters.options.firstCandidacy
const getOptions = createSelector(
  getGender,
  getRaceOrColor,
  getStateInitials,
  getFavorites,
  getFirstCandidacy,
  (gender, raceOrColor, state, favorites, firstCandidacy) => ({
    state,
    gender,
    raceOrColor,
    favorites,
    firstCandidacy
  })
)

export const SearchFiltersSelectors = {
  getGender,
  getRaceOrColor,
  getStateInitials,
  isFetching: state => state.searchFilters.fetching,
  getFavorites,
  getOptions,
  getFirstCandidacy,
  getSearchFilterKey: createSelector(getOptions, options => generateSearchFilterKey(options))
}
