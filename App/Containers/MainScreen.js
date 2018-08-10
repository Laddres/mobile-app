// @flow
import React, { Component } from 'react'
import { ActivityIndicator, ScrollView, View, Alert } from 'react-native'
import { connect } from 'react-redux'
import SearchBar from '../Components/SearchBar'
import Section from '../Components/Section'
import ImageButton from '../Components/ImageButton'
import CandidatePreviewCard from '../Components/CandidatePreviewCard'
import _ from 'lodash'

// Styles
import styles from './Styles/MainScreenStyle'
import { Images, Colors } from '../Themes'
import { CandidatosType } from '../Redux/CandidatosRedux'

type Props = {
  fetching: boolean,
  candidates: CandidatosType
}

class MainScreen extends Component<Props> {
  // constructor (props) {
  //   super(props)
  //   this.state = {}
  // }

  developmentAlert = () => Alert.alert('Em desenvolvimento', 'Funcionalidade em desenvolvimento')

  renderCandidatePreviewCard = candidate => {
    const { idCandidato, nome, partido, numero, img, onPress } = candidate
    return (
      <CandidatePreviewCard
        name={nome}
        imgSrc={img}
        key={idCandidato}
        onPress={onPress}
        party={`${partido} ${numero}`}
      />
    )
  }

  render () {
    const { fetching, candidates } = this.props
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <ImageButton source={Images.menu} style={styles.filtersButton} onPress={this.developmentAlert} />
          <View style={styles.verticalSeparator} />
          <SearchBar placeholder={'Você conhece o seu candidato?'} />
        </View>
        {fetching ? (
          <View style={styles.fetchingContainer}>
            <ActivityIndicator color={Colors.text} size={'large'} />
          </View>
        ) : (
          candidates &&
          Object.keys(candidates).map(role => (
            <Section title={_.startCase(role)} key={role}>
              {candidates[role].map(candidate => this.renderCandidatePreviewCard(candidate))}
            </Section>
          ))
        )}
      </ScrollView>
    )
  }
}

const mapStateToProps = state => {
  return {
    candidates: state.candidatos.data,
    fetching: state.candidatos.fetching
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainScreen)
