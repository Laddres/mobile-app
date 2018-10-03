// @flow
import React from 'react'
import { View } from 'react-native'
import { storiesOf } from '@storybook/react-native'
import ProfileCard from './ProfileCard'
import { Colors, Metrics } from '../Themes'

const enhancementStyle = { alignItems: 'center', padding: Metrics.baseMargin, backgroundColor: Colors.background }
const candidate = {
  id: 0,
  nome: 'Maria Osmarina Marina da Silva Vaz de Lima',
  nomeUrna: 'Marina Silva',
  foto:
    'http://divulgacandcontas.tse.jus.br/candidaturas/oficial/2018/BR/BR/2022802018/280000622171/foto_1534295591196.jpg',
  dataNascimento: '08/02/1958',
  idade: '60 anos',
  cidadeNatal: 'Rio Branco',
  estadoNatal: 'Acre',
  partido: 'REDE',
  numero: 18,
  cargo: 'Presidente',
  grauInstrucao: 'Superior Completo',
  ocupacao: 'Servidor Público Federal'
}
storiesOf('ProfileCard', module)
  .addDecorator(storyFn => <View style={enhancementStyle}>{storyFn()}</View>)
  .add('Default', () => <ProfileCard candidate={candidate} picture={''} />)
