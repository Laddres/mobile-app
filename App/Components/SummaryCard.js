// @flow
import * as React from 'react'
import { View, Text } from 'react-native'
import styles from './Styles/SummaryCardStyle'
import CardContainer from './CardContainer'
import { SummaryType } from '../Redux/SummaryRedux'

type Props = {
  fetching: ?boolean,
  data: SummaryType
}

export default class SummaryCard extends React.Component<Props> {
  render () {
    const { fetching, data } = this.props
    return (
      <CardContainer fetching={fetching}>
        <View style={styles.container}>
          <Text style={styles.subtitle}>PARTIDOS</Text>
          <View style={[styles.subsection, styles.removeMarginRight]}>
            <View>
              <Text style={styles.value}>{data.numeroPartidos}</Text>
              <Text style={styles.description}>Partidos</Text>
            </View>
            <Text style={styles.previousParties}>
              {data.partidosAnteriores.join(' - ')}
              {data.partidosAnteriores.length ? ' - ' : null}
              <Text style={styles.actualParty}>{data.partidoAtual}</Text>
            </Text>
          </View>
          <Text style={styles.subtitle}>PROCESSOS</Text>
          <View style={styles.subsection}>
            <View>
              <Text style={styles.value}>{data.numeroProcessosJudiciais}</Text>
              <Text style={styles.description}>Processos Judiciais</Text>
            </View>
          </View>
          <Text style={styles.subtitle}>ELEIÇÕES</Text>
          <View style={styles.subsection}>
            <View>
              <Text style={styles.value}>{data.numeroCandidaturas}</Text>
              <Text style={styles.description}>Candidaturas</Text>
            </View>
            <View>
              <Text style={styles.value}>{data.numeroMandatos}</Text>
              <Text style={styles.description}>Mandatos</Text>
            </View>
          </View>
          <Text style={styles.subtitle}>AUTORIA DE PROJETOS</Text>
          <View style={styles.subsection}>
            <View>
              <Text style={styles.value}>{data.numeroProposicoes}</Text>
              <Text style={styles.description}>Proposições</Text>
            </View>
            <View>
              <Text style={styles.value}>{data.numeroProjetos}</Text>
              <Text style={styles.description}>Projetos</Text>
            </View>
          </View>
        </View>
      </CardContainer>
    )
  }
}
