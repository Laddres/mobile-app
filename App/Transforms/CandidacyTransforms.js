// @flow
import { CandidacyType } from '../Redux/CandidacyRedux'

export default {
  responseTransform: (rawData: Array<any>): Array<CandidacyType> =>
    rawData.map(item => ({
      ...item,
      cidade: item['cidade'] || '',
      estado: item['estado'] || '',
      resultado: item['resultado'] || '',
      nomeLegenda: item['nomeLegenda'] || '',
      siglaEstado: item['siglaEstado'] || '',
      composicaoLegenda: item['composicaoLegenda'] || ''
    }))
}
