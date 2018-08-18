// @flow
import React, { Component } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { Images } from '../Themes'
import CardContainer from './CardContainer'
import styles from './Styles/CandidacyCardStyle'

type Props = {
  candidacy: {
    cargo: string,
    partido: string,
    descricaoEleicao: string,
    anoEleicao: string,
    cidade: string,
    estado: string,
    nomeLegenda: string,
    composicaoLegenda: string,
    resultado: string
  },
  onPress: () => void
}

class CandidacyCard extends Component<Props> {
  render () {
    const { candidacy, onPress } = this.props
    return (
      <CardContainer>
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.role}>
              <Text style={[styles.title, styles.yellow]}>CARGO</Text>
              <Text style={[styles.headerText, styles.yellow]}>{candidacy.cargo}</Text>
            </View>
            <View style={styles.party}>
              <Text style={[styles.title, styles.textRight]}>PARTIDO</Text>
              <Text style={[styles.headerText, styles.textRight]}>{candidacy.partido}</Text>
            </View>
          </View>
          <View style={styles.headerSeparator} />
          <View style={styles.body}>
            <View style={styles.info}>
              <Text style={styles.title}>{candidacy.descricaoEleicao}</Text>
              <Text style={styles.bodyText}>{candidacy.anoEleicao}</Text>
            </View>
            <View style={styles.info}>
              <Text style={styles.title}>LOCAL</Text>
              <Text style={styles.bodyText}>
                {candidacy.estado
                  ? candidacy.cidade
                    ? `${candidacy.cidade}, ${candidacy.estado}`
                    : candidacy.estado
                  : 'Brasil'}
              </Text>
            </View>
            <View style={styles.info}>
              <Text style={styles.title}>COLIGAÇÃO</Text>
              <Text style={styles.bodyText}>{candidacy.nomeLegenda}</Text>
              <Text style={styles.bodyText}>{candidacy.composicaoLegenda}</Text>
            </View>
            <View style={styles.info}>
              <Text style={styles.title}>RESULTADO</Text>
              <Text style={styles.bodyText}>{candidacy.resultado}</Text>
            </View>
          </View>
          {candidacy.resultado === 'Eleito' && (
            <View style={styles.performance}>
              <View style={styles.performanceSeparator} />
              <TouchableOpacity style={styles.performanceButton} onPress={onPress}>
                <Text style={[styles.performanceText, styles.textCenter]}>ATUAÇÃO</Text>
                <Image source={Images.chevronDown} />
              </TouchableOpacity>
            </View>
          )}
        </View>
      </CardContainer>
    )
  }
}

export default CandidacyCard
