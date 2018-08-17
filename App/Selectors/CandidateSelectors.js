// @flow
export const CandidateSelectors = {
  fetchingCandidate: state => {
    const { selected } = state.candidate
    return selected && state.candidate.fetching[selected]
  },
  getSelectedCandidate: state => {
    const { selected, data } = state.candidate
    return selected ? data[selected] : null
  }
}
