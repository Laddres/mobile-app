// @flow
import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { View } from 'react-native'
import Section from './Section'

const boxStyle = {backgroundColor: 'red', width: 200, height: 200, marginLeft: 5}

storiesOf('Section', module)
  .addDecorator(storyFn => <View style={{ alignItems: 'center', paddingVertical: 20 }}>{storyFn()}</View>)
  .add('Default', () => (
    <Section title={'DefaultSection'}>
      <View style={boxStyle} />
      <View style={boxStyle} />
      <View style={boxStyle} />
      <View style={boxStyle} />
    </Section>
  ))
