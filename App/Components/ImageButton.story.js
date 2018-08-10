// @flow
import React from 'react'
import { storiesOf } from '@storybook/react-native'
import ImageButton from './ImageButton'
import { Images } from '../Themes'

storiesOf('ImageButton', module)
  .add('Default', () => <ImageButton source={Images.logo} />)
