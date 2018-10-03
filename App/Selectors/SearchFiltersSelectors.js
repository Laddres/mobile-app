// @flow
import { createSelector } from 'reselect'
import { generateSearchFilterKey } from '../Lib/Utils'

const getStateInitials = (state: any) => state.searchFilters.options.state
const getRaceOrColor = state => state.searchFilters.options.raceOrColor
const getGender = state => state.searchFilters.options.gender
const getFavorites = state => state.searchFilters.options.favorites
const getOptions = createSelector(
  getGender,
  getRaceOrColor,
  getStateInitials,
  getFavorites,
  (gender, raceOrColor, state, favorites) => ({
    state,
    gender,
    raceOrColor,
    favorites
  })
)

export const SearchFiltersSelectors = {
  getGender,
  getRaceOrColor,
  getStateInitials,
  isFetching: state => state.searchFilters.fetching,
  getFavorites,
  getOptions,
  getSearchFilterKey: createSelector(getOptions, options => generateSearchFilterKey(options))
}
