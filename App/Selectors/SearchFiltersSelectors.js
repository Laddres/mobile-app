// @flow
import { createSelector } from 'reselect'
import { generateSearchFilterKey } from '../Lib/Utils'

const getStateInitials = (state: any) => state.searchFilters.options.state
const getRaceOrColor = state => state.searchFilters.options.raceOrColor
const getGender = state => state.searchFilters.options.gender
const getOptions = createSelector(getGender, getRaceOrColor, getStateInitials, (gender, raceOrColor, state) => ({
  state,
  gender,
  raceOrColor
}))

export const SearchFiltersSelectors = {
  getGender,
  getRaceOrColor,
  getStateInitials,
  isFetching: state => state.searchFilters.fetching,
  getOptions,
  getSearchFilterKey: createSelector(getOptions, options => generateSearchFilterKey(options))
}
