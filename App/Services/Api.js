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
  const getCandidateProfile = id => api.get(`/candidatos/${id}`)
  const getCandidacy = id => api.get(`/candidatos/${id}/candidaturas`)

  return {
    getCandidatos,
    getCandidateProfile,
    getCandidacy
  }
}

export default {
  create
}
