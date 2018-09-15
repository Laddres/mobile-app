// @flow
import * as React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './Styles/CandidaciesListStyle'
import { generateProjectProposalKey } from '../Lib/Utils'
import type { CandidacyType } from '../Redux/CandidacyRedux'
import CandidacyCard from './CandidacyCard'
import { Images } from '../Themes'
import CardContainer from './CardContainer'

type Props = {
  fetching: ?boolean,
  candidateName: string,
  getProposals: string => mixed,
  candidacies: Array<CandidacyType>
}

export default class CandidaciesList extends React.Component<Props> {
  get hasNoPreviousCandidacies (): boolean {
    return !Array.isArray(this.props.candidacies) || !this.props.candidacies.length
  }

  render () {
    const { fetching, getProposals, candidacies, candidateName: name } = this.props
    return (
      <View>
        {this.hasNoPreviousCandidacies ? (
          <CardContainer fetching={fetching}>
            <Image source={Images.rocket} />
            <Text style={styles.message}>{`Esta é a primeira vez de ${name} como candidato`}</Text>
          </CardContainer>
        ) : (
          candidacies.map(candidacy => {
            const key = generateProjectProposalKey(candidacy.idCandidato, candidacy.anoEleicao, candidacy.cargo)
            return (
              <CandidacyCard candidacy={candidacy} projectProposals={getProposals(key)} key={key} fetching={fetching} />
            )
          })
        )}
      </View>
    )
  }
}
