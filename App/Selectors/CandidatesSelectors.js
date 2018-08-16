// @flow
export const CandidatesSelectors = {
  filterResults: (state: any) => {
    const {
      searchBar: { query },
      candidatos: { data }
    } = state
    const formattedQuery = query.toUpperCase()
    const noCandidatesAvailable = !Object.keys(data).length
    if (noCandidatesAvailable || !formattedQuery || formattedQuery.length < 2) {
      return data
    }
    let candidates = {}
    Object.keys(data).map(role => {
      candidates[role] = data[role].filter(candidate => candidate.nome.toUpperCase().includes(formattedQuery))
    })
    return candidates
  }
}
