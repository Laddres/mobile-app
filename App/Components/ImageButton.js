// @flow
import * as React from 'react'
import { TouchableOpacity, Image } from 'react-native'
import styles from './Styles/ImageButtonStyle'
import { getImageHitSlop } from '../Lib/Utils'
import _ from 'lodash'

import type { StyleObj } from 'react-native/Libraries/StyleSheet/StyleSheetTypes'

type Props = {
  source: number | { uri: string },
  onPress?: () => void,
  style?: StyleObj,
  imageStyle?: {}
}

export default class ImageButton extends React.Component<Props> {
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  render () {
    const { source, onPress, style, imageStyle } = this.props
    const sourceAsset = Image.resolveAssetSource(source)
    const width = _.get(sourceAsset, 'width') || 0
    const height = _.get(sourceAsset, 'height') || 0

    return (
      <TouchableOpacity onPress={onPress} style={[styles.container, style]} hitSlop={getImageHitSlop(width, height)}>
        <Image resizeMode={'contain'} style={imageStyle} source={source} />
      </TouchableOpacity>
    )
  }
}
