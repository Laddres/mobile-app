export default {
  getCandidatos: () =>
    new Promise(resolve =>
      setTimeout(
        () =>
          resolve({
            ok: true,
            data: require('../Fixtures/getCandidatos.json')
          }),
        500
      )
    )
}
