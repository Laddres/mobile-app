// @flow
import React, { Component } from 'react'
import { ScrollView, View, Alert } from 'react-native'
import { connect } from 'react-redux'
import SearchBar from '../Components/SearchBar'
import Section from '../Components/Section'
import ImageButton from '../Components/ImageButton'
import CandidatePreviewCard from '../Components/CandidatePreviewCard'

// Styles
import styles from './Styles/MainScreenStyle'
import { Images } from '../Themes'

type Props = {}

class MainScreen extends Component<Props> {
  // constructor (props) {
  //   super(props)
  //   this.state = {}
  // }

  developmentAlert = () => Alert.alert('Em desenvolvimento', 'Funcionalidade em desenvolvimento')

  renderCandidatePreviewCard = candidate => {
    const { name, party, img, onPress } = candidate
    return <CandidatePreviewCard name={name} party={party} imgSrc={img} onPress={onPress} />
  }

  render () {
    const candidates = [
      { name: 'Marina Silva', party: 'REDE 18', img: '', onPress: this.developmentAlert },
      { name: "Manuela D'avila", party: 'PCdoB 60', img: '', onPress: this.developmentAlert },
      { name: 'Lula da Silva', party: 'PT 13', img: '', onPress: this.developmentAlert }
    ]
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <ImageButton source={Images.menu} style={styles.filtersButton} onPress={this.developmentAlert} />
          <View style={styles.verticalSeparator} />
          <SearchBar placeholder={'Você conhece o seu candidato?'} />
        </View>
        <Section title='presidente'>{candidates.map(candidate => this.renderCandidatePreviewCard(candidate))}</Section>
        <Section title='governador'>{candidates.map(candidate => this.renderCandidatePreviewCard(candidate))}</Section>
        <Section title='senador'>{candidates.map(candidate => this.renderCandidatePreviewCard(candidate))}</Section>
      </ScrollView>
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
)(MainScreen)
