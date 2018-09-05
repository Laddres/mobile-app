import apisauce from 'apisauce'

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
  const getLawsuits = id => api.get(`/candidatos/${id}/processos`)

  return {
    getCandidatos,
    getSummary,
    getCandidateProfile,
    getCandidacy,
    getProjectProposal,
    getLawsuits
  }
}

export default {
  create
}
