// @flow
import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { View } from 'react-native'
import SearchBar from './SearchBar'

storiesOf('SearchBar', module)
  .addDecorator(storyFn =>
    <View style={{ height: 50, backgroundColor: 'green' }}>
      {storyFn()}
    </View>)
  .add('Default', () => (
    <SearchBar placeholder={'Você conhece o seu candidato?'} />
  ))
