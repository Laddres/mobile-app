import apisauce from 'apisauce'
import Config from 'react-native-config'

const create = (baseURL = 'https://api.caueira.com.br/') => {
  const api = apisauce.create({
    baseURL,
    headers: {
      'Cache-Control': 'no-cache'
    },
    // 10 second timeout...
    timeout: 10000
  })

  const getCandidatos = () => api.get('/candidatos/')
  const getSummary = id => api.get(`/candidatos/${id}/resumo`)
  const getCandidateProfile = id => api.get(`/candidatos/${id}`)
  const getCandidacy = id => api.get(`/candidatos/${id}/candidaturas`)
  const getProjectProposal = (id, year, role) => api.get(`/candidatos/${id}/mandatos?anoEleicao=${year}&cargo=${role}`)
  const getLikes = (idCandidate, idDevice) =>
    api.post(
      Config.ENDPOINT_GET_LIKES,
      { idCandidato: idCandidate, idDispositivo: idDevice },
      { headers: { 'Access-Token': Config.API_ACCESS_TOKEN } }
    )
  const like = (idCandidate, idDevice) =>
    api.post(
      Config.ENDPOINT_LIKE_CANDIDATE,
      { idCandidato: idCandidate, idDispositivo: idDevice },
      { headers: { 'Access-Token': Config.API_ACCESS_TOKEN } }
    )
  const unLike = (idCandidate, idDevice) =>
    api.post(
      Config.ENDPOINT_DISLIKE_CANDIDATE,
      { idCandidato: idCandidate, idDispositivo: idDevice },
      { headers: { 'Access-Token': Config.API_ACCESS_TOKEN } }
    )

  return {
    getCandidatos,
    getSummary,
    getCandidateProfile,
    getCandidacy,
    getProjectProposal,
    getLikes,
    like,
    unLike
  }
}

export default {
  create
}
