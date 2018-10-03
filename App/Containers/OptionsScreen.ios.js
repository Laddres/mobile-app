// @flow
import React, { Component } from 'react'
import {
  ActionSheetIOS,
  ActivityIndicator,
  Image,
  Picker,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import { connect } from 'react-redux'
import _ from 'lodash'
import capitalize from 'capitalize-pt-br'
import { brazilianStates } from '../Lib/Utils'
import { Colors, Images } from '../Themes'
import SearchFiltersActions from '../Redux/SearchFiltersRedux'
import CandidatesActions from '../Redux/CandidatesRedux'

// Styles
import styles from './Styles/OptionsScreenStyle'
import type { NavigationScreenProp } from 'react-navigation'
import { SearchFiltersSelectors } from '../Selectors'
import type { optionsType } from '../Redux/SearchFiltersRedux'
import OptionSelector from '../Components/OptionSelector'
import Separator from '../Components/Separator'

type Props = {
  gender: ?string,
  favorites: boolean,
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
  selectedState: string,
  favorites: boolean
}

class OptionsScreen extends Component<Props, State> {
  constructor (props: Props) {
    super(props)
    const FALLBACK_SELECTED_STATE = 'SE'
    this.state = {
      favorites: props.favorites,
      selectedGender: props.gender,
      selectedRaceOrColor: props.raceOrColor,
      selectedState: props.stateInitials || FALLBACK_SELECTED_STATE
    }
  }

  onSubmit = () => {
    const options = {
      state: this.state.selectedState,
      favorites: this.state.favorites,
      gender: this.state.selectedGender,
      raceOrColor: this.state.selectedRaceOrColor
    }
    this.props.setOptions(options)
    this.props.getCandidates(options)
    this.props.navigation.navigate('MainScreen')
  }

  showGendersOptions = () => {
    const options = ['Cancelar', 'Todos', 'Feminino', 'Masculino']
    ActionSheetIOS.showActionSheetWithOptions(
      {
        title: 'Gênero',
        options,
        cancelButtonIndex: 0
      },
      buttonIndex => {
        if (buttonIndex !== 0) {
          this.setState({ selectedGender: options[buttonIndex].toLowerCase() })
        }
      }
    )
  }

  showColorOrRaceOptions = () => {
    const options = ['Cancelar', 'Todas', 'Branca', 'Preta', 'Parda', 'Amarela', 'Indígena']
    ActionSheetIOS.showActionSheetWithOptions(
      {
        title: 'Cor/Raça',
        options,
        cancelButtonIndex: 0
      },
      buttonIndex => {
        if (buttonIndex !== 0) {
          this.setState({ selectedRaceOrColor: options[buttonIndex].toLowerCase() })
        }
      }
    )
  }

  render () {
    const { fetchingState } = this.props
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer} centerContent>
        {fetchingState ? (
          <ActivityIndicator size={'large'} color={Colors.text} />
        ) : (
          <View style={styles.internalContainer}>
            <View style={styles.header}>
              <Text style={styles.headerText}>FILTROS</Text>
            </View>
            <View style={styles.content}>
              <View style={[styles.optionContainer, styles.inlineOption]}>
                <Text style={styles.title}>EXIBIR APENAS FAVORITOS</Text>
                <OptionSelector
                  selected={this.state.favorites}
                  onSelect={() => this.setState(prevState => ({ favorites: !prevState.favorites }))}
                />
              </View>
              <Separator color={Colors.darkSeparator} />
              <View style={[styles.optionContainer, styles.inlineOption]}>
                <Text style={styles.title}>GÊNERO</Text>
                <TouchableOpacity onPress={this.showGendersOptions} style={styles.selectedChoiceButton}>
                  <Text style={styles.selectedChoice}>{capitalize(this.state.selectedGender)}</Text>
                  <Image source={Images.chevronDown} />
                </TouchableOpacity>
              </View>
              <Separator color={Colors.darkSeparator} />
              <View style={[styles.optionContainer, styles.inlineOption]}>
                <Text style={styles.title}>RAÇA/COR</Text>
                <TouchableOpacity onPress={this.showColorOrRaceOptions} style={styles.selectedChoiceButton}>
                  <Text style={styles.selectedChoice}>{capitalize(this.state.selectedRaceOrColor)}</Text>
                  <Image source={Images.chevronDown} />
                </TouchableOpacity>
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
