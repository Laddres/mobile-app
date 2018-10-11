// @flow
import React, { Component } from 'react'
import { ScrollView, Text, Picker, TouchableOpacity, View, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import _ from 'lodash'
import { brazilianStates } from '../Lib/Utils'
import { Colors } from '../Themes'
import SearchFiltersActions from '../Redux/SearchFiltersRedux'
import CandidatesActions from '../Redux/CandidatesRedux'
import Separator from '../Components/Separator'

// Styles
import styles from './Styles/OptionsScreenStyle'
import type { NavigationScreenProp } from 'react-navigation'
import { SearchFiltersSelectors } from '../Selectors'
import type { optionsType } from '../Redux/SearchFiltersRedux'
import OptionSelector from '../Components/OptionSelector'

type Props = {
  gender: ?string,
  favorites: boolean,
  raceOrColor: ?string,
  stateInitials: ?string,
  firstCandidacy: boolean,
  fetchingState: ?boolean,
  setOptions: optionsType => mixed,
  getCandidates: string => mixed,
  navigation: NavigationScreenProp
}

type State = {
  selectedGender: string,
  selectedRaceOrColor: string,
  selectedState: string,
  favorites: boolean,
  firstCandidacy: boolean
}

class OptionsScreenAndroid extends Component<Props, State> {
  constructor (props: Props) {
    super(props)
    const FALLBACK_SELECTED_STATE = 'SE'
    this.state = {
      favorites: props.favorites,
      selectedGender: props.gender,
      firstCandidacy: props.firstCandidacy,
      selectedRaceOrColor: props.raceOrColor,
      selectedState: props.stateInitials || FALLBACK_SELECTED_STATE
    }
  }

  onSubmit = () => {
    const options = {
      state: this.state.selectedState,
      favorites: this.state.favorites,
      gender: this.state.selectedGender,
      raceOrColor: this.state.selectedRaceOrColor,
      firstCandidacy: this.state.firstCandidacy
    }
    this.props.setOptions(options)
    this.props.getCandidates(options)
    this.props.navigation.navigate('MainScreen')
  }

  render () {
    const { fetchingState } = this.props
    return (
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        {fetchingState ? (
          <ActivityIndicator size={'large'} color={Colors.text} />
        ) : (
          <View style={styles.container}>
            <View style={styles.header}>
              <Text style={styles.headerText}>FILTROS</Text>
            </View>
            <View style={styles.content}>
              <View style={[styles.optionContainer, styles.inlineOption]}>
                <Text style={styles.title}>APENAS FAVORITOS</Text>
                <OptionSelector
                  selected={this.state.favorites}
                  onSelect={() => this.setState(prevState => ({ favorites: !prevState.favorites }))}
                />
              </View>
              <Separator color={Colors.darkSeparator} />
              <View style={[styles.optionContainer, styles.inlineOption]}>
                <Text style={styles.title}>APENAS ESTREANTES</Text>
                <OptionSelector
                  selected={this.state.firstCandidacy}
                  onSelect={() => this.setState(prevState => ({ firstCandidacy: !prevState.firstCandidacy }))}
                />
              </View>
              <Separator color={Colors.darkSeparator} />
              <View style={styles.optionContainer}>
                <Text style={styles.title}>GÊNERO</Text>
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
              <Separator color={Colors.darkSeparator} />
              <View style={styles.optionContainer}>
                <Text style={styles.title}>RAÇA/COR</Text>
                <Picker
                  style={styles.picker}
                  selectedValue={this.state.selectedRaceOrColor}
                  onValueChange={item => this.setState({ selectedRaceOrColor: item })}
                >
                  <Picker.Item label={'Todas'} value={'todas'} />
                  <Picker.Item label={'Branca'} value={'branca'} />
                  <Picker.Item label={'Preta'} value={'preta'} />
                  <Picker.Item label={'Parda'} value={'padra'} />
                  <Picker.Item label={'Amarela'} value={'amarela'} />
                  <Picker.Item label={'Indígena'} value={'indígena'} />
                </Picker>
              </View>
              <Separator color={Colors.darkSeparator} />
              <View style={styles.optionContainer}>
                <Text style={styles.title}>ESTADO</Text>
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
      </ScrollView>
    )
  }
}

const mapStateToProps = state => {
  return {
    favorites: SearchFiltersSelectors.getFavorites(state),
    stateInitials: SearchFiltersSelectors.getStateInitials(state),
    firstCandidacy: SearchFiltersSelectors.getFirstCandidacy(state),
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
)(OptionsScreenAndroid)
