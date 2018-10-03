// @flow
import { SearchBarSelectors } from './SearchBarSelectors'
import { SearchFiltersSelectors } from './SearchFiltersSelectors'
import { createSelector } from 'reselect'

export const CandidatesSelectors = {
  isFetching: createSelector(
    SearchFiltersSelectors.getSearchFilterKey,
    (state: any) => state.candidates.fetching,
    (key: string, fetching: { [string]: ?boolean }) => fetching[key]
  ),
  filterResults: createSelector(
    SearchBarSelectors.getQuery,
    SearchFiltersSelectors.getSearchFilterKey,
    (state: any) => state.candidates.data,
    (query, key, data) => {
      const formatedQuery = query.toUpperCase()
      const candidates = data[key]
      const noCandidatesAvailable = candidates instanceof Object && !Object.keys(candidates).length
      if (noCandidatesAvailable || query.length < 2) {
        return candidates
      }
      let filteredCandidates = {}
      Object.keys(candidates).map(role => {
        filteredCandidates[role] = candidates[role].filter(candidate =>
          candidate.nome.toUpperCase().includes(formatedQuery)
        )
      })
      return filteredCandidates
    }
  )
}
