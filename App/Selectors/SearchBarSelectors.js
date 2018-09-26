// @flow
export const SearchBarSelectors = {
  getQuery: (state: any) => state.searchBar.query.toUpperCase(),
  fetchSuggestions: (state: any) => {
    const {
      searchBar: { query },
      candidates: { data },
      searchFilters: { state: stateInitials }
    } = state
    const rawCandidates = data[stateInitials]
    const formattedQuery = query.toUpperCase()
    const noCandidatesAvailable = !Object.keys(rawCandidates).length
    if (noCandidatesAvailable || formattedQuery.length < 2) {
      return []
    }
    const candidates = Object.keys(rawCandidates).reduce((prev, curr) => [...prev, ...rawCandidates[curr]], [])
    return candidates.filter(candidate => candidate.nome.toUpperCase().includes(formattedQuery))
  }
}
