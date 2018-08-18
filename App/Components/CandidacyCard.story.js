// @flow
import React from 'react'
import { View } from 'react-native'
import { storiesOf } from '@storybook/react-native'

import { Colors, Metrics } from '../Themes'

import CandidacyCard from './CandidacyCard'

const enhancementStyle = { alignItems: 'center', padding: Metrics.baseMargin, backgroundColor: Colors.background }

storiesOf('CandidacyCard', module)
  .addDecorator(storyFn => <View style={enhancementStyle}>{storyFn()}</View>)
  .add('Default', () => {
    const candidacy = {
      cargo: 'Deputado Federal',
      partido: 'PV',
      descricaoEleicao: 'ELEIÇÕES GERAIS 2014',
      anoEleicao: '2010',
      cidade: '',
      estado: 'Acre',
      nomeLegenda: 'Acre Agora e Sempre',
      composicaoLegenda: 'PV / PCB / PMDB',
      resultado: 'Eleito'
    }
    return <CandidacyCard candidacy={candidacy} />
  })
  .add('Senador', () => {
    const candidacy = {
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
    return <CandidacyCard candidacy={candidacy} />
  })
