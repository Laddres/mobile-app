// @flow
import React from 'react'
import { View } from 'react-native'
import { storiesOf } from '@storybook/react-native'
import PerformanceItem from './PerformanceItem'
import { Colors, Images } from '../Themes'
import { openExternalApp } from '../Lib/Utils'

const project = {
  id: 484493,
  sigla: 'PL',
  numero: 7739,
  ano: 2010,
  ementa:
    'Altera a Lei nº 8.989, de 24 de fevereiro de 1995, para isentar a aquisição de veículos destinados ao transporte coletivo de escolares do Imposto sobre Produtos Industrializados (IPI) ',
  keywords:
    'Alteração, Lei de Isenção do IPI para Compra de Automóveis, isenção, (IPI), aquisição, veículo, transporte escolar.',
  url: 'http://www.camara.gov.br/proposicoesWeb/prop_mostrarintegra?codteor=792946'
}

storiesOf('PerformanceItem', module)
  .addDecorator(storyFn => (
    <View style={{ alignItems: 'center', backgroundColor: Colors.background }}>{storyFn()}</View>
  ))
  .add('Default', () => (
    <PerformanceItem title={`${project.sigla} ${project.numero}/${project.ano}`} description={project.ementa} />
  ))
  .add('w/ icon', () => (
    <PerformanceItem
      icon={Images.menu}
      title={`${project.sigla} ${project.numero}/${project.ano}`}
      description={project.ementa}
      onPressIcon={() => openExternalApp(project.url)}
    />
  ))
  .add('w/ icon and w/ separator', () => (
    <PerformanceItem
      separator
      icon={Images.menu}
      title={`${project.sigla} ${project.numero}/${project.ano}`}
      description={project.ementa}
      onPressIcon={() => openExternalApp(project.url)}
    />
  ))
