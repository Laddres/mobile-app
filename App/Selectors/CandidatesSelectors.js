// @flow
import { SearchBarSelectors } from './SearchBarSelectors'
import { SearchFiltersSelectors } from './SearchFiltersSelectors'
import { createSelector } from 'reselect'

export const CandidatesSelectors = {
  isFetching: createSelector(
    SearchFiltersSelectors.getStateInitials,
    (state: any) => state.candidates.fetching,
    (stateInitials: string, fetching: { [string]: ?boolean }) => fetching[stateInitials]
  ),
  filterResults: createSelector(
    SearchBarSelectors.getQuery,
    SearchFiltersSelectors.getStateInitials,
    (state: any) => state.candidates.data,
    (query, stateInitials, data) => {
      const formatedQuery = query.toUpperCase()
      const candidates = data[stateInitials]
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
