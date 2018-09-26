export default {
  getCandidates: () =>
    new Promise(resolve =>
      setTimeout(
        () =>
          resolve({
            ok: true,
            data: require('../Fixtures/getCandidates.json')
          }),
        500
      )
    ),
  getCandidateProfile: () =>
    new Promise(resolve =>
      setTimeout(
        () =>
          resolve({
            ok: true,
            data: require('../Fixtures/getCandidateProfile.json')
          }),
        500
      )
    ),
  getCandidacy: () =>
    new Promise(resolve =>
      setTimeout(
        () =>
          resolve({
            ok: true,
            data: require('../Fixtures/getCandidacy.json')
          }),
        500
      )
    ),
  getProjectProposal: () =>
    new Promise(resolve =>
      setTimeout(
        () =>
          resolve({
            ok: true,
            data: require('../Fixtures/getProjectPropostal.json')
          }),
        500
      )
    )
}
