// @flow
import React from 'react'
import { View, Text } from 'react-native'
import { storiesOf } from '@storybook/react-native'
import CardContainer from './CardContainer'
import { Colors, Metrics } from '../Themes'

const enhancementStyle = { alignItems: 'center', padding: Metrics.baseMargin, backgroundColor: Colors.background }

storiesOf('CardContainer', module)
  .addDecorator(storyFn => <View style={enhancementStyle}>{storyFn()}</View>)
  .add('Default', () => (
    <CardContainer>
      <Text style={{ fontSize: 32 }}>Hello!</Text>
      <View style={{ backgroundColor: 'red', height: 40, width: 40, borderRadius: 20 }}>
        <View style={{ backgroundColor: 'white', height: 10, width: 10 }} />
      </View>
    </CardContainer>
  ))
  .add('Fetching', () => (
    <CardContainer fetching>
      <Text style={{ fontSize: 32 }}>Hello!</Text>
    </CardContainer>
  ))
