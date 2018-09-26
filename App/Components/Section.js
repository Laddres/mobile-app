// @flow
import * as React from 'react'
import { FlatList, View, Text } from 'react-native'
import styles from './Styles/SectionStyle'
import type { CandidatesType } from '../Redux/CandidatesRedux'
import { CandidateType } from '../Redux/CandidatesRedux'
import CandidatePreviewCard from './CandidatePreviewCard'

type Props = {
  title: string,
  data: CandidatesType,
  onPressCandidate: number => mixed
}

export default class Section extends React.Component<Props> {
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.props.title.toUpperCase()}</Text>
        <FlatList
          bounces
          horizontal
          style={styles.itens}
          contentContainerStyle={styles.itensContent}
          data={this.props.data}
          showsHorizontalScrollIndicator={false}
          keyExtractor={candidate => `${candidate.id}.${candidate.numero}.${Math.random()}`}
          renderItem={({ item }: { item: CandidateType }) => (
            <CandidatePreviewCard
              name={item.nome}
              imgSrc={{ uri: item.foto }}
              onPress={() => this.props.onPressCandidate(item.id)}
              party={`${item.partido} ${item.numero}`}
            />
          )}
        />
      </View>
    )
  }
}
