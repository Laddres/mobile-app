// @flow
import { SearchFiltersSelectors, SearchBarSelectors } from '../Selectors'
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
      const candidates = data[stateInitials]
      const noCandidatesAvailable = !Object.keys(candidates).length
      if (noCandidatesAvailable || query.length < 2) {
        return candidates
      }
      let filteredCandidates = {}
      Object.keys(filteredCandidates).map(role => {
        candidates[role] = filteredCandidates[role].filter(candidate => candidate.nome.toUpperCase().includes(query))
      })
      return filteredCandidates
    }
  )
}
