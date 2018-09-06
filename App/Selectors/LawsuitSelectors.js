// @flow
export const LawsuitSelectors = {
  fetching: state => {
    const { selected } = state.candidate
    return selected && state.lawsuit.fetching[selected]
  },
  getLawsuit: state => {
    const { selected } = state.candidate
    const { data } = state.lawsuit
    return selected ? data[selected] : null
  }
}
