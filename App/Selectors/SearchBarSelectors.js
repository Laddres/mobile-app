// @flow
export const SearchBarSelectors = {
  fetchSuggestions: (state: any) => {
    const {
      searchBar: { query },
      candidatos: { data }
    } = state
    const formattedQuery = query.toUpperCase()
    const noCandidatesAvailable = !Object.keys(data).length
    if (noCandidatesAvailable || !formattedQuery || formattedQuery.length < 2) {
      return []
    }
    const candidates = Object.keys(data).reduce((prev, curr) => [...prev, ...data[curr]], [])
    return candidates.filter(candidate => candidate.nome.toUpperCase().includes(formattedQuery))
  }
}
