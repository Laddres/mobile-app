// @flow
import React from 'react'
import { View } from 'react-native'
import { storiesOf } from '@storybook/react-native'

import CardContainer from './CardContainer'
import { Colors, Metrics } from '../Themes'

import CandidacyCard from './CandidacyCard'

const enhancementStyle = { alignItems: 'center', padding: Metrics.baseMargin, backgroundColor: Colors.background }

storiesOf('CandidacyCard', module)
  .addDecorator(storyFn => <View style={enhancementStyle}>{storyFn()}</View>)
  .add('Default', () => (
    <CardContainer>
      <CandidacyCard
        role='Deputado Federal'
        party='PV'
        electionName='ELEIÇÕES GERAIS 2014'
        electionYear='2010'
        city=''
        state='Acre'
        allianceName='Acre Agora e Sempre'
        allianceParties='PV / PCB / PMDB'
        result='Eleito'
      />
    </CardContainer>
  ))
  .add('Senador', () => (
    <CardContainer>
      <CandidacyCard
        role='Senador'
        party='REDE'
        electionName='ELEIÇÕES GERAIS 2014'
        electionYear='2014'
        city=''
        state='Acre'
        allianceName='Frente Popular de Acrelândia'
        allianceParties='PT / PMN / PSB / PV / PC do B'
        result='Não Eleito'
      />
    </CardContainer>
  ))
