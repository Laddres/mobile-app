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

const lawsuit = {
  idProcesso: 7785,
  numero: '4694 / 0016317-57.2018.1.00.0000',
  tipo: 'Inquérito',
  tribunal: 'STF',
  descricao:
    'É alvo de denúncia da Procuradoria Geral da República, por crime de racismo (Lei 7.716/89). A denúncia se baseia em declarações feitas pelo parlamentar durante palestra realizada no dia 3 de abril de 2017, no Clube Hebraica do Rio de Janeiro. Segundo a PGR, as declarações referentes a quilombolas foram negativas e discriminatórias, incitando ou induzindo ódio de caráter racial.',
  link: 'http://stf.jus.br/portal/processo/verProcessoDetalhe.asp?incidente=5437294'
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
  .add('w/ subtitle', () => (
    <PerformanceItem
      key={`${lawsuit.idLawsuit}`}
      title={`Ação ṇ° ${lawsuit.numero}`}
      subtitle={`${lawsuit.tipo} • ${lawsuit.tribunal}`}
      icon={Images.search}
      description={lawsuit.descricao}
      onPressIcon={() => openExternalApp(lawsuit.link)}
    />
  ))
