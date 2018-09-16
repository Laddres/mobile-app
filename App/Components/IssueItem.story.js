// @flow
import React from 'react'
import { View } from 'react-native'
import { storiesOf } from '@storybook/react-native'
import IssueItem from './IssueItem'
import { Colors } from '../Themes'

const issue = {
  id: 484493,
  sigla: 'PL',
  numero: 6787,
  ano: 2016,
  titulo: 'Reforma trabalhista',
  ementa:
    'Altera a Lei nº 8.989, de 24 de fevereiro de 1995, para isentar a aquisição de veículos destinados ao transporte coletivo de escolares do Imposto sobre Produtos Industrializados (IPI) ',
  posicao: 2
}

storiesOf('IssueItem', module)
  .addDecorator(storyFn => (
    <View style={{ alignItems: 'center', backgroundColor: Colors.background }}>{storyFn()}</View>
  ))
  .add('Default', () => <IssueItem issue={issue} onPress={() => console.warn(`Issue pressed: ${issue.titulo}`)} />)
