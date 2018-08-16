// @flow
import React from 'react'
import { View } from 'react-native'
import { storiesOf } from '@storybook/react-native'
import CandidatePreviewCard from './CandidatePreviewCard'

storiesOf('CandidatePreviewCard', module)
  .addDecorator(storyFn => (
    <View style={{ alignItems: 'center', paddingVertical: 20, backgroundColor: 'green' }}>{storyFn()}</View>
  ))
  .add('Default', () => <CandidatePreviewCard name={'Lula da Silva'} party={'PT 13'} />)
