// @flow
import * as React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './Styles/LawsuitsCardStyle'
import CardContainer from './CardContainer'
import PerformanceItem from './PerformanceItem'
import type { LawsuitDataType } from '../Redux/LawsuitRedux'
import { openExternalApp } from '../Lib/Utils'
import { Images } from '../Themes'

type Props = {
  fetching: ?boolean,
  lawsuits: LawsuitDataType
}

export default class LawsuitsCard extends React.Component<Props> {
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  get message (): string {
    const hasNoData = this.props.lawsuits.processado === null
    return hasNoData
      ? 'Ainda não temos informações sobre os processos judiciais deste candidato.'
      : 'Este candidato não possui nenhum processo judicial.'
  }

  render () {
    const { fetching, lawsuits } = this.props
    return (
      <CardContainer fetching={fetching}>
        {!lawsuits.processado ? (
          <View style={styles.container}>
            <View style={styles.noLawsuits}>
              <Image source={Images.smile} style={styles.image} />
              <Text style={styles.message}>{this.message}</Text>
            </View>
          </View>
        ) : (
          <View style={styles.container}>
            <View style={styles.header}>
              <Text style={styles.title}>AÇÕES JUDICIAIS</Text>
              <Text style={styles.number}>{lawsuits.numeroProcessos}</Text>
              <Text style={styles.description}>Processos</Text>
            </View>
            <View>
              {lawsuits.processos.map((lawsuit, key) => (
                <PerformanceItem
                  separator={key !== lawsuits.processos.length - 1}
                  key={`${lawsuit.idProcesso}`}
                  title={`Ação ṇ° ${lawsuit.numero}`}
                  subtitle={`${lawsuit.tipo} • ${lawsuit.tribunal}`}
                  icon={Images.search}
                  description={lawsuit.descricao}
                  onPressIcon={() => openExternalApp(lawsuit.link)}
                />
              ))}
            </View>
          </View>
        )}
      </CardContainer>
    )
  }
}
