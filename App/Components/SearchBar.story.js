// @flow
import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { View } from 'react-native'
import SearchBar from './SearchBar'

export const suggestions = [
  {
    idCandidatura: 1,
    idCandidato: 1,
    nome: 'teste candidato 1',
    numero: 22,
    partido: 'xx'
  },
  {
    idCandidatura: 2,
    idCandidato: 2,
    nome: 'teste candidato 2',
    numero: 35,
    partido: 'yy'
  }
]

storiesOf('SearchBar', module)
  .addDecorator(storyFn => <View style={{ height: 200, backgroundColor: 'white' }}>{storyFn()}</View>)
  .add('Default', () => (
    <SearchBar
      onPress={() => {}}
      onChoose={() => {}}
      placeholder={'Você conhece o seu candidato?'}
      showSuggestions
      suggestions={suggestions}
    />
  ))
