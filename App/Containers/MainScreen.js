// @flow
import React, { Component } from 'react'
import { ActivityIndicator, ScrollView, View, Alert } from 'react-native'
import { connect } from 'react-redux'
import SearchBar from '../Components/SearchBar'
import Section from '../Components/Section'
import ImageButton from '../Components/ImageButton'
import CandidatePreviewCard from '../Components/CandidatePreviewCard'
import _ from 'lodash'
import { SearchBarSelectors, CandidatesSelectors } from '../Selectors'
import SearchBarActions from '../Redux/SearchBarRedux'

// Styles
import styles from './Styles/MainScreenStyle'
import { Images, Colors } from '../Themes'
import type { CandidatesType, CandidateType } from '../Redux/CandidatosRedux'

type Props = {
  fetching: boolean,
  candidates: CandidatesType,
  searchQuery: string,
  searchBarSuggestions: Array<CandidateType>,
  onChangeSearchQuery: string => mixed
}

class MainScreen extends Component<Props> {
  // constructor (props) {
  //   super(props)
  //   this.state = {}
  // }

  developmentAlert = () => Alert.alert('Em desenvolvimento', 'Funcionalidade em desenvolvimento')

  render () {
    const { fetching, candidates, searchQuery, searchBarSuggestions, onChangeSearchQuery } = this.props
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <ImageButton source={Images.menu} style={styles.filtersButton} onPress={this.developmentAlert} />
          <View style={styles.verticalSeparator} />
          <SearchBar
            query={searchQuery}
            showSuggestions={false}
            onChange={onChangeSearchQuery}
            onChoose={idCandidato => Alert.alert('kiu', idCandidato)}
            suggestions={searchBarSuggestions}
            placeholder={'Você conhece o seu candidato?'}
          />
        </View>
        {fetching ? (
          <View style={styles.fetchingContainer}>
            <ActivityIndicator color={Colors.text} size={'large'} />
          </View>
        ) : (
          candidates &&
          Object.keys(candidates).map(role => (
            <Section title={_.startCase(role)} key={role}>
              {candidates[role].map(candidate => (
                <CandidatePreviewCard
                  name={candidate.nome}
                  imgSrc={candidate.img}
                  key={candidate.idCandidato}
                  onPress={this.developmentAlert}
                  party={`${candidate.partido} ${candidate.numero}`}
                />
              ))}
            </Section>
          ))
        )}
      </ScrollView>
    )
  }
}

const mapStateToProps = state => {
  return {
    candidates: CandidatesSelectors.filterResults(state),
    fetching: state.candidatos.fetching,
    searchQuery: state.searchBar.query,
    searchBarSuggestions: SearchBarSelectors.fetchSuggestions(state)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onChangeSearchQuery: query => dispatch(SearchBarActions.searchBarChange(query))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainScreen)
