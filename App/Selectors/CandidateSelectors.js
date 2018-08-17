// @flow
export const CandidateSelectors = {
  getSelectedCandidate: state => {
    const { selected, data } = state.candidate
    return selected ? data[selected] : null
  }
}
