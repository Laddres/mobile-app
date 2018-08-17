// @flow
export const CandidacySelectors = {
  fetchingCandidacies: state => {
    const { selected } = state.candidate
    return selected && state.candidacy.fetching[selected]
  },
  getCandidacies: state => {
    const { selected } = state.candidate
    const { data } = state.candidacy
    return selected ? data[selected] : null
  }
}
