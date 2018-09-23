// @flow
import React, { Component } from 'react'
import { Text, Picker, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'
import _ from 'lodash'
import { brazilianStates, developmentAlert } from '../Lib/Utils'

// Styles
import styles from './Styles/StateSelectionScreenStyle'

type Props = {}

const states = brazilianStates()

class StateSelection extends Component<Props> {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>SELECIONE SEU ESTADO</Text>
        <Picker onValueChange={value => developmentAlert()} selectedValue={'SE'} style={styles.picker}>
          {_.map(states, state => (
            <Picker.Item key={state.id} label={state.nome} value={state.sigla} />
          ))}
        </Picker>
        <TouchableOpacity onPress={developmentAlert} style={styles.buttonNextStep}>
          <Text style={styles.buttonContent}>CONFIRMAR</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StateSelection)
