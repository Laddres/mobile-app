// @flow
import type { SummaryType } from '../Redux/SummaryRedux'

export default {
  responseTransform: (rawData: any): SummaryType => ({
    ...rawData,
    numeroPartidos: rawData['numeroPartidos'] || 0,
    numeroProcessosJudiciais: rawData['numeroProcessosJudiciais'] || 0,
    numeroCandidaturas: rawData['numeroCandidaturas'] || 0,
    numeroMandatos: rawData['numeroMandatos'] || 0,
    numeroMandatosPreciso: rawData['numeroMandatosPreciso'] || true,
    numeroProposicoes: rawData['numeroProposicoes'] || 0,
    numeroProjetos: rawData['numeroProjetos'] || 0
  })
}
