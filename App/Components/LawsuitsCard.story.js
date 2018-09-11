// @flow
import React from 'react'
import { View } from 'react-native'
import { storiesOf } from '@storybook/react-native'

import { Colors, Metrics } from '../Themes'

import LawsuitsCard from './LawsuitsCard'

const lawsuits = {
  processado: true,
  numeroProcessos: 2,
  processos: [
    {
      idProcesso: 7785,
      numero: '4694 / 0016317-57.2018.1.00.0000',
      tipo: 'Inquérito',
      tribunal: 'STF',
      descricao:
        'É alvo de denúncia da Procuradoria Geral da República, por crime de racismo (Lei 7.716/89). A denúncia se baseia em declarações feitas pelo parlamentar durante palestra realizada no dia 3 de abril de 2017, no Clube Hebraica do Rio de Janeiro. Segundo a PGR, as declarações referentes a quilombolas foram negativas e discriminatórias, incitando ou induzindo ódio de caráter racial.',
      link: 'http://stf.jus.br/portal/processo/verProcessoDetalhe.asp?incidente=5437294'
    },
    {
      idProcesso: 7785,
      numero: '4694 / 0016317-57.2018.1.00.0000',
      tipo: 'Inquérito',
      tribunal: 'STF',
      descricao:
        'É alvo de denúncia da Procuradoria Geral da República, por crime de racismo (Lei 7.716/89). A denúncia se baseia em declarações feitas pelo parlamentar durante palestra realizada no dia 3 de abril de 2017, no Clube Hebraica do Rio de Janeiro. Segundo a PGR, as declarações referentes a quilombolas foram negativas e discriminatórias, incitando ou induzindo ódio de caráter racial.',
      link: 'http://stf.jus.br/portal/processo/verProcessoDetalhe.asp?incidente=5437294'
    }
  ]
}

const enhancementStyle = {
  flex: 1,
  alignItems: 'center',
  padding: Metrics.baseMargin,
  backgroundColor: Colors.background
}

storiesOf('LawsuitsCard', module)
  .addDecorator(storyFn => <View style={enhancementStyle}>{storyFn()}</View>)
  .add('Default', () => {
    Object.assign(lawsuits, { processado: true })
    return <LawsuitsCard lawsuits={lawsuits} />
  })
  .add('without data', () => {
    Object.assign(lawsuits, { processado: null })
    return <LawsuitsCard lawsuits={lawsuits} />
  })
  .add('without lawsuits', () => {
    Object.assign(lawsuits, { processado: false })
    return <LawsuitsCard lawsuits={lawsuits} />
  })
