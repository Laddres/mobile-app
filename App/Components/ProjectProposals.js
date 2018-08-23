// @flow
import * as React from 'react'
import { View, Text } from 'react-native'
import styles from './Styles/ProjectProposalsStyle'
import PerformanceItem from './PerformanceItem'
import Separator from './Separator'
import { Images } from '../Themes'
import { openExternalApp } from '../Lib/Utils'
import type { ProjectsType } from '../Redux/ProjectProposalRedux'

type Props = {
  data: ProjectsType
}

export default class ProjectProposals extends React.Component<Props> {
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  render () {
    const { data } = this.props
    return (
      <View style={styles.container}>
        <Separator style={styles.separator} />
        <Text style={styles.title}>Autoria de projetos</Text>
        <View style={styles.statistics}>
          <View>
            <Text style={styles.total}>{data.totalProjetos}</Text>
            <Text style={styles.description}>Projetos</Text>
          </View>
          <View>
            <Text style={styles.total}>{data.totalProposicoes}</Text>
            <Text style={styles.description}>Proposições</Text>
          </View>
        </View>
        {data.projetos.map((project, key) => (
          <PerformanceItem
            separator={key !== data.projetos.length - 1}
            key={`${project.sigla} ${project.numero}/${project.ano}`}
            title={`${project.sigla} ${project.numero}/${project.ano}`}
            icon={Images.search}
            description={project.ementa}
            onPressIcon={() => openExternalApp(project.url)}
          />
        ))}
      </View>
    )
  }
}
