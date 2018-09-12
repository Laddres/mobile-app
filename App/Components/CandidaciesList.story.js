// @flow
import React from 'react'
import { View } from 'react-native'
import { storiesOf } from '@storybook/react-native'

import { Colors, Metrics } from '../Themes'

import CandidaciesList from './CandidaciesList'

const enhancementStyle = { padding: Metrics.baseMargin, backgroundColor: Colors.background }
const candidacies = [
  {
    cargo: 'Deputado Federal',
    partido: 'PV',
    descricaoEleicao: 'ELEIÇÕES GERAIS 2014',
    anoEleicao: '2010',
    cidade: '',
    estado: 'Acre',
    nomeLegenda: 'Acre Agora e Sempre',
    composicaoLegenda: 'PV / PCB / PMDB',
    resultado: 'Eleito'
  },
  {
    cargo: 'Senador',
    partido: 'REDE',
    descricaoEleicao: 'ELEIÇÕES GERAIS 2014',
    anoEleicao: '2014',
    cidade: '',
    estado: 'Acre',
    nomeLegenda: 'Frente Popular de Acrelândia',
    composicaoLegenda: 'PT / PMN / PSB / PV / PC do B',
    resultado: 'Não Eleitoo'
  }
]

storiesOf('CandidaciesList', module)
  .addDecorator(storyFn => <View style={enhancementStyle}>{storyFn()}</View>)
  .add('Default', () => (
    <CandidaciesList
      fetching={false}
      candidacies={candidacies}
      getProposals={() => {}}
      candidateName={'Teste candidato'}
    />
  ))
  .add('Without data', () => (
    <CandidaciesList fetching={false} candidacies={[]} getProposals={() => {}} candidateName={'Teste candidato'} />
  ))
