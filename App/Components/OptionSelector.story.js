import React from 'react'
import { View } from 'react-native'
import { storiesOf } from '@storybook/react-native'
import OptionSelector from './OptionSelector'

storiesOf('OptionSelector', module)
  .addDecorator(storyFn => <View style={{ padding: 10 }}>{storyFn()}</View>)
  .add('Default', () => <OptionSelector aoSelecionar={() => {}} />)
  .add('Selected', () => <OptionSelector selecionado aoSelecionar={() => {}} />)
