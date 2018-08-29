// @flow
import React from 'react'
import { View } from 'react-native'
import { Metrics } from '../Themes'
import { storiesOf } from '@storybook/react-native'
import SummaryCard from './SummaryCard'

const data = {
  idCandidato: 304,
  numeroPartidos: 3,
  partidoAtual: 'PSDB',
  partidosAnteriores: ['PV', 'PT'],
  numeroProcessosJudiciais: 0,
  numeroCandidaturas: 7,
  numeroMandatos: 1,
  numeroProposicoes: 291,
  numeroProjetos: 38
}
const enhancementStyle = { alignItems: 'center', padding: Metrics.baseMargin }
storiesOf('SummaryCard', module)
  .addDecorator(storyFn => <View style={enhancementStyle}>{storyFn()}</View>)
  .add('Default', () => <SummaryCard data={data} fetching={false} />)
