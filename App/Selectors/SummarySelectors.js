// @flow
export const SummarySelectors = {
  fetching: state => {
    const { selected } = state.candidate
    return selected && state.summary.fetching[selected]
  },
  getSummary: state => {
    const { selected } = state.candidate
    const { data } = state.summary
    return selected ? data[selected] : null
  }
}
