// @flow
import React, { Component } from 'react'
import { ActivityIndicator, Image, View } from 'react-native'
import { connect } from 'react-redux'

// Styles
import styles from './Styles/SplashScreenStyle'
import { Colors, Images } from '../Themes'

type Props = {}

class SplashScreen extends Component<Props> {
  render () {
    return (
      <View style={styles.container}>
        <Image source={Images.logoSplashscreen} resizeMode='contain' style={styles.image} />
        <ActivityIndicator size={'large'} color={Colors.text} style={styles.loader} />
      </View>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SplashScreen)
