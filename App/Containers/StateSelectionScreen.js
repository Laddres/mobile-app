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
import styles from './Styles/StateSelectionScreenStyle'
import type { NavigationScreenProp } from 'react-navigation'
import { SearchFiltersSelectors } from '../Selectors'

type Props = {
  stateInitials: ?string,
  fetchingState: ?boolean,
  setState: string => mixed,
  getCandidates: string => mixed,
  navigation: NavigationScreenProp
}

type State = {
  selected: string
}

class StateSelection extends Component<Props, State> {
  constructor (props: Props) {
    super(props)
    const FALLBACK_SELECTED_STATE = 'SE'
    this.state = { selected: props.stateInitials || FALLBACK_SELECTED_STATE }
  }

  onSubmit = () => {
    this.props.setState(this.state.selected)
    this.props.getCandidates(this.state.selected)
    this.props.navigation.navigate('MainScreen')
  }

  render () {
    const { fetchingState } = this.props
    return (
      <View style={styles.container}>
        {fetchingState ? (
          <ActivityIndicator size={'large'} color={Colors.text} />
        ) : (
          <View>
            <Text style={styles.title}>SELECIONE SEU ESTADO</Text>
            <Picker
              style={styles.picker}
              selectedValue={this.state.selected}
              onValueChange={item => this.setState({ selected: item })}
            >
              {_.map(brazilianStates(), state => (
                <Picker.Item key={state.id} label={state.nome} value={state.sigla} />
              ))}
            </Picker>
            <TouchableOpacity onPress={this.onSubmit} style={styles.buttonNextStep}>
              <Text style={styles.buttonContent}>CONFIRMAR</Text>
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
    fetching: SearchFiltersSelectors.isFetching(state)
  }
}

const mapDispatchToProps = {
  setState: SearchFiltersActions.searchFiltersSetState,
  getCandidates: CandidatesActions.candidatesRequest
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StateSelection)
