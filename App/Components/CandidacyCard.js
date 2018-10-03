// @flow
import React, { Component } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { Images } from '../Themes'
import CardContainer from './CardContainer'
import styles from './Styles/CandidacyCardStyle'
import Separator from './Separator'
import { developmentAlert } from '../Lib/Utils'
import ProjectProposals from './ProjectProposals'
import type { ProjectsType } from '../Redux/ProjectProposalRedux'

type Props = {
  fetching?: boolean,
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
  onPress: () => void,
  projectProposals: ProjectsType
}

type State = {
  expanded?: boolean
}

class CandidacyCard extends Component<Props, State> {
  constructor (props: Props) {
    super(props)
    this.state = { expanded: false }
  }

  get showPerformance (): boolean {
    const {
      projectProposals: projects,
      candidacy: { resultado: result }
    } = this.props
    const electedCandidacy = result.toUpperCase() === 'ELEITO' || result.toUpperCase() === 'ELEITO POR QP'
    return electedCandidacy && projects && projects.totalProjetos && projects.totalProposicoes
  }

  expandReduceCard = () => {
    if (this.props.candidacy.cargo.toUpperCase() === 'DEPUTADO FEDERAL') {
      this.setState(prevState => ({ expanded: !prevState.expanded }))
    } else {
      developmentAlert()
    }
  }

  render () {
    const { candidacy, fetching, projectProposals } = this.props
    return (
      <CardContainer fetching={fetching}>
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
          <Separator style={styles.headerSeparator} />
          <View style={styles.body}>
            <View style={styles.info}>
              <Text style={styles.title}>{candidacy.descricaoEleicao.toUpperCase()}</Text>
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
              {!!candidacy.nomeLegenda && <Text style={styles.bodyText}>{candidacy.nomeLegenda}</Text>}
              {!!candidacy.composicaoLegenda && (
                <Text style={[styles.bodyText, styles.composition]}>{candidacy.composicaoLegenda}</Text>
              )}
              {!candidacy.nomeLegenda &&
                !candidacy.composicaoLegenda && (
                  <Text style={[styles.bodyText, styles.noDataText]}>
                    O TSE não disponibilizou informações sobre esta coligação
                  </Text>
                )}
            </View>
            <View style={styles.info}>
              <Text style={styles.title}>RESULTADO</Text>
              {candidacy.resultado ? (
                <Text style={styles.bodyText}>{candidacy.resultado}</Text>
              ) : (
                <Text style={[styles.bodyText, styles.noDataText]}>
                  O TSE não disponibilizou o resultado desta candidatura
                </Text>
              )}
            </View>
          </View>
          {this.state.expanded && <ProjectProposals data={projectProposals} />}
          {this.showPerformance ? (
            <View style={styles.performance}>
              <Separator style={styles.performanceSeparator} />
              <TouchableOpacity style={styles.performanceButton} onPress={this.expandReduceCard}>
                <Text style={[styles.performanceText, styles.textCenter]}>ATUAÇÃO</Text>
                <Image source={this.state.expanded ? Images.chevronUp : Images.chevronDown} />
              </TouchableOpacity>
            </View>
          ) : null}
        </View>
      </CardContainer>
    )
  }
}

export default CandidacyCard
