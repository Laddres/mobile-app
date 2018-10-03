// @flow
import React, { Component } from 'react'
import { Text, Picker, TouchableOpacity, View, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import _ from 'lodash'
import { brazilianStates } from '../Lib/Utils'
import { Colors } from '../Themes'
import SearchFiltersActions from '../Redux/SearchFiltersRedux'
import CandidatesActions from '../Redux/CandidatesRedux'

// Styles
import styles from './Styles/OptionsScreenStyle'
import type { NavigationScreenProp } from 'react-navigation'
import { SearchFiltersSelectors } from '../Selectors'
import type { optionsType } from '../Redux/SearchFiltersRedux'

type Props = {
  gender: ?string,
  raceOrColor: ?string,
  stateInitials: ?string,
  fetchingState: ?boolean,
  setOptions: optionsType => mixed,
  getCandidates: string => mixed,
  navigation: NavigationScreenProp
}

type State = {
  selectedGender: string,
  selectedRaceOrColor: string,
  selectedState: string
}

class OptionsScreen extends Component<Props, State> {
  constructor (props: Props) {
    super(props)
    const FALLBACK_SELECTED_STATE = 'SE'
    this.state = {
      selectedGender: props.gender,
      selectedRaceOrColor: props.raceOrColor,
      selectedState: props.stateInitials || FALLBACK_SELECTED_STATE
    }
  }

  onSubmit = () => {
    const options = {
      state: this.state.selectedState,
      gender: this.state.selectedGender,
      raceOrColor: this.state.selectedRaceOrColor
    }
    this.props.setOptions(options)
    this.props.getCandidates(options)
    this.props.navigation.navigate('MainScreen')
  }

  render () {
    const { fetchingState } = this.props
    return (
      <View style={styles.container}>
        {fetchingState ? (
          <ActivityIndicator size={'large'} color={Colors.text} />
        ) : (
          <View style={styles.container}>
            <View style={styles.header}>
              <Text style={styles.headerText}>FILTROS</Text>
            </View>
            <View style={styles.content}>
              <View style={styles.pickerContainer}>
                <Text style={styles.title}>GÊNERO:</Text>
                <Picker
                  style={styles.picker}
                  selectedValue={this.state.selectedGender}
                  onValueChange={item => this.setState({ selectedGender: item })}
                >
                  <Picker.Item label={'Todos'} value={'todos'} />
                  <Picker.Item label={'Masculino'} value={'masculino'} />
                  <Picker.Item label={'Feminino'} value={'feminino'} />
                </Picker>
              </View>
              <View style={styles.pickerContainer}>
                <Text style={styles.title}>RAÇA/COR:</Text>
                <Picker
                  style={styles.picker}
                  selectedValue={this.state.selectedRaceOrColor}
                  onValueChange={item => this.setState({ selectedRaceOrColor: item })}
                >
                  <Picker.Item label={'Todos'} value={'todos'} />
                  <Picker.Item label={'Branca'} value={'branca'} />
                  <Picker.Item label={'Preta'} value={'preta'} />
                  <Picker.Item label={'Parda'} value={'padra'} />
                  <Picker.Item label={'Amarela'} value={'amarela'} />
                  <Picker.Item label={'Indígena'} value={'indígena'} />
                </Picker>
              </View>
              <View style={styles.pickerContainer}>
                <Text style={styles.title}>ESTADO:</Text>
                <Picker
                  style={styles.picker}
                  selectedValue={this.state.selectedState}
                  onValueChange={item => this.setState({ selectedState: item })}
                >
                  {_.map(brazilianStates(), state => (
                    <Picker.Item key={state.id} label={state.nome} value={state.sigla} />
                  ))}
                </Picker>
              </View>
            </View>
            <TouchableOpacity onPress={this.onSubmit} style={styles.buttonNextStep}>
              <Text style={styles.buttonText}>CONFIRMAR</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    stateInitials: SearchFiltersSelectors.getStateInitials(state),
    raceOrColor: SearchFiltersSelectors.getRaceOrColor(state),
    gender: SearchFiltersSelectors.getGender(state),
    fetching: SearchFiltersSelectors.isFetching(state)
  }
}

const mapDispatchToProps = {
  setOptions: SearchFiltersActions.searchFiltersSetOptions,
  getCandidates: CandidatesActions.candidatesRequest
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OptionsScreen)
