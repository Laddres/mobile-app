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

  const getAccessToken = uniqueId => api.post(Config.ENDPOINT_GET_TOKEN, { uniqueId, secret: Config.APP_SECRET })
  const getCandidatos = () => api.get('/candidatos/')
  const getSummary = id => api.get(`/candidatos/${id}/resumo`)
  const getCandidateProfile = id => api.get(`/candidatos/${id}`)
  const getCandidacy = id => api.get(`/candidatos/${id}/candidaturas`)
  const getProjectProposal = (id, year, role) => api.get(`/candidatos/${id}/mandatos?anoEleicao=${year}&cargo=${role}`)
  const getLikes = (idCandidate, token) =>
    api.get(`candidatos/${idCandidate}/${Config.ENDPOINT_GET_LIKES}`, {}, { headers: { 'x-access-token': token } })
  const like = (idCandidate, token) =>
    api.post(Config.ENDPOINT_LIKE_CANDIDATE, { idCandidato: idCandidate }, { headers: { 'x-access-token': token } })
  const unLike = (idCandidate, token) =>
    api.post(Config.ENDPOINT_UNLIKE_CANDIDATE, { idCandidato: idCandidate }, { headers: { 'x-access-token': token } })
  const getLawsuits = (id, token) =>
    api.get(`/candidatos/${id}/processos`, {}, { headers: { 'x-access-token': token } })

  return {
    getAccessToken,
    getCandidatos,
    getSummary,
    getCandidateProfile,
    getCandidacy,
    getProjectProposal,
    getLikes,
    like,
    unLike,
    getLawsuits
  }
}

export default {
  create
}
