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
          <View style={styles.subsection}>
            <View style={styles.partiesLeftSubsubsection}>
              <Text style={styles.value}>{data.numeroPartidos}</Text>
              <Text style={styles.description}>Partidos</Text>
            </View>
            <View style={styles.partiesRightSubsubsection}>
              <Text style={styles.previousParties}>
                {data.partidosAnteriores.join(' - ')}
                {data.partidosAnteriores.length ? ' - ' : null}
                <Text style={styles.actualParty}>{data.partidoAtual}</Text>
              </Text>
            </View>
          </View>
          <Text style={styles.subtitle}>PROCESSOS</Text>
          <View style={styles.subsection}>
            <View>
              <Text style={styles.value}>{data.numeroProcessosJudiciais}</Text>
              <Text style={styles.description}>Processos Judiciais</Text>
            </View>
          </View>
          <Text style={styles.subtitle}>ELEIÇÕES ANTERIORES</Text>
          <View style={styles.subsection}>
            <View style={styles.leftSubsubsection}>
              <Text style={styles.value}>{data.numeroCandidaturas}</Text>
              <Text style={styles.description}>Candidaturas</Text>
            </View>
            <View style={styles.rightSubsubsection}>
              <View style={styles.mandatosContainer}>
                <Text style={styles.value}>{data.numeroMandatos}</Text>
                {!data.numeroMandatosPreciso && <Text style={styles.inaccurate}>*</Text>}
              </View>
              <Text style={styles.description}>Mandatos</Text>
            </View>
          </View>
          {!data.numeroMandatosPreciso && (
            <View style={styles.observationContainer}>
              <Text style={styles.inaccurate}>*</Text>
              <Text style={styles.observation}>
                Algumas candidaturas não tiveram resultado disponibilizado pelo TSE
              </Text>
            </View>
          )}
          <Text style={styles.subtitle}>AUTORIA DE PROJETOS NA CÂMARA DE DEPUTADOS</Text>
          <View style={styles.subsection}>
            <View style={styles.leftSubsubsection}>
              <Text style={styles.value}>{data.numeroProposicoes}</Text>
              <Text style={styles.description}>Proposições</Text>
            </View>
            <View style={styles.rightSubsubsection}>
              <Text style={styles.value}>{data.numeroProjetos}</Text>
              <Text style={styles.description}>Projetos</Text>
            </View>
          </View>
        </View>
      </CardContainer>
    )
  }
}
