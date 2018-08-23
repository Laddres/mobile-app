// @flow
export const ProjectProposalsSelectors = {
  getProposals: (state: any, key: string) => {
    return state.projectProposal.data[key]
  }
}
