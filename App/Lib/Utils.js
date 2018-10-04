import { Alert, Linking, PermissionsAndroid } from 'react-native'
import type { optionsType } from '../Redux/SearchFiltersRedux'

export const getImageHitSlop = (width, height) => {
  const clamp = (base, min, max) => Math.max(Math.min(base, max), min)
  const minWidthByMaterialDesign = 40
  const minHeightByMaterialDesign = 40
  const diffWidth = clamp(minWidthByMaterialDesign - width, 0, minWidthByMaterialDesign)
  const diffHeight = clamp(minHeightByMaterialDesign - height, 0, minHeightByMaterialDesign)
  const horizontalMargin = diffWidth / 2
  const verticalMargin = diffHeight / 2

  return {
    left: horizontalMargin,
    right: horizontalMargin,
    top: verticalMargin,
    bottom: verticalMargin
  }
}

export const developmentAlert = () => Alert.alert('Em desenvolvimento', 'Funcionalidade em desenvolvimento')

export const openExternalApp = (url: string) => {
  Linking.canOpenURL(url).then(supported => {
    if (supported) {
      Linking.openURL(url)
    } else {
      console.log("Don't know how to open URI: " + url)
    }
  })
}

export const generateProjectProposalKey = (id, year, role) => `${id}.${year}.${role}`

export const brazilianStates = () => ({
  AC: {
    id: 1,
    sigla: 'AC',
    nome: 'Acre'
  },
  AL: {
    id: 2,
    sigla: 'AL',
    nome: 'Alagoas'
  },
  AM: {
    id: 3,
    sigla: 'AM',
    nome: 'Amazonas'
  },
  AP: {
    id: 4,
    sigla: 'AP',
    nome: 'Amapá'
  },
  BA: {
    id: 5,
    sigla: 'BA',
    nome: 'Bahia'
  },
  CE: {
    id: 6,
    sigla: 'CE',
    nome: 'Ceará'
  },
  DF: {
    id: 7,
    sigla: 'DF',
    nome: 'Distrito Federal'
  },
  ES: {
    id: 8,
    sigla: 'ES',
    nome: 'Espírito Santos'
  },
  GO: {
    id: 9,
    sigla: 'GO',
    nome: 'Goiás'
  },
  MA: {
    id: 10,
    sigla: 'MA',
    nome: 'Maranhão'
  },
  MG: {
    id: 11,
    sigla: 'MG',
    nome: 'Minas Gerais'
  },
  MS: {
    id: 12,
    sigla: 'MS',
    nome: 'Mato Grosso do Sul'
  },
  MT: {
    id: 13,
    sigla: 'MT',
    nome: 'Mato Grosso'
  },
  PA: {
    id: 14,
    sigla: 'PA',
    nome: 'Pará'
  },
  PB: {
    id: 15,
    sigla: 'PB',
    nome: 'Paraíba'
  },
  PE: {
    id: 16,
    sigla: 'PE',
    nome: 'Pernambuco'
  },
  PI: {
    id: 17,
    sigla: 'PI',
    nome: 'Piauí'
  },
  PR: {
    id: 18,
    sigla: 'PR',
    nome: 'Paraná'
  },
  RJ: {
    id: 19,
    sigla: 'RJ',
    nome: 'Rio de Janeiro'
  },
  RN: {
    id: 20,
    sigla: 'RN',
    nome: 'Rio Grande do Norte'
  },
  RO: {
    id: 21,
    sigla: 'RO',
    nome: 'Rondônia'
  },
  RR: {
    id: 22,
    sigla: 'RR',
    nome: 'Roraima'
  },
  RS: {
    id: 23,
    sigla: 'RS',
    nome: 'Rio Grande do Sul'
  },
  SC: {
    id: 24,
    sigla: 'SC',
    nome: 'Santa Catarina'
  },
  SE: {
    id: 25,
    sigla: 'SE',
    nome: 'Sergipe'
  },
  SP: {
    id: 26,
    sigla: 'SP',
    nome: 'São Paulo'
  },
  TO: {
    id: 27,
    sigla: 'TO',
    nome: 'Tocantins'
  }
})

export const requireAndroidLocationPermission = async () => {
  try {
    return await PermissionsAndroid.require(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, {
      title: 'Permissão para capturar localização',
      message: 'Laddres gostaria de acessar a localização do seu celular.'
    })
  } catch (err) {
    return false
  }
}

export const extractStateInitialsFromAddress = (address: string) => {
  if (typeof address !== 'string') {
    return null
  }
  const members = address.match(/State of (\w+)/)
  if (!Array.isArray(members) || typeof members[1] !== 'string') {
    return null
  }
  const stateInitials = members[1].substr(0, 2).toUpperCase()
  return stateInitials
}

export const generateSearchFilterKey = (options: optionsType) => {
  return `${options.gender}.${options.raceOrColor}.${options.state}.${options.favorites}`.toUpperCase()
}

export const generateCandidatesQueryWithFilters = (options: optionsType) => {
  const query = { estado: options.state }
  const defaultGenderOption = 'todos'
  const defaultRaceOrColorOption = 'todas'
  if (options.gender !== defaultGenderOption) {
    query.genero = options.gender
  }
  if (options.raceOrColor !== defaultRaceOrColorOption) {
    query.corRaca = options.raceOrColor
  }
  if (options.firstCandidacy) {
    query.primeiraCandidatura = true
  }
  return query
}
