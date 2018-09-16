// @flow
import React from 'react'
import { View } from 'react-native'
import { storiesOf } from '@storybook/react-native'
import IssuePositioningCard from './IssuePositioningCard'

const issues = [
  {
    id: 484493,
    sigla: 'PL',
    numero: 6787,
    ano: 2016,
    titulo: 'Reforma trabalhista',
    ementa:
      'Altera a Lei nº 8.989, de 24 de fevereiro de 1995, para isentar a aquisição de veículos destinados ao transporte coletivo de escolares do Imposto sobre Produtos Industrializados (IPI) ',
    posicao: 2
  },
  {
    id: 484494,
    sigla: 'PL',
    numero: 6787,
    ano: 2016,
    titulo: 'Reforma trabalhista',
    ementa:
      'Altera a Lei nº 8.989, de 24 de fevereiro de 1995, para isentar a aquisição de veículos destinados ao transporte coletivo de escolares do Imposto sobre Produtos Industrializados (IPI) ',
    posicao: 0
  },
  {
    id: 484495,
    sigla: 'PL',
    numero: 6787,
    ano: 2016,
    titulo: 'Reforma trabalhista',
    ementa:
      'Altera a Lei nº 8.989, de 24 de fevereiro de 1995, para isentar a aquisição de veículos destinados ao transporte coletivo de escolares do Imposto sobre Produtos Industrializados (IPI) ',
    posicao: -2
  }
]

storiesOf('IssuePositioningCard', module)
  .addDecorator(storyFn => (
    <View style={{ alignItems: 'center', paddingVertical: 20, backgroundColor: 'green' }}>{storyFn()}</View>
  ))
  .add('Default', () => <IssuePositioningCard issues={issues} fetching={false} />)
