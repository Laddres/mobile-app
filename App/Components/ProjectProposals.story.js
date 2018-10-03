// @flow
import React from 'react'
import { View } from 'react-native'
import { storiesOf } from '@storybook/react-native'
import ProjectProposals from './ProjectProposals'
import { Metrics } from '../Themes'

const data = {
  projetos: [
    {
      id: 353957,
      sigla: 'PL',
      numero: 1223,
      ano: 2007,
      ementa:
        'Altera dispositivos da Lei nº 6.494, de 7 de dezembro de 1977, a fim de dispor sobre a seleção de estagiários por órgãos públicos, bem como sobre a jornada no contrato de estágio. ',
      keywords:
        'Alteração, Lei do Estágio, obrigatoriedade, Administração Pública, realização, processo seletivo, contratação, estagiário, fixação, limite máximo, carga horária, jornada de trabalho, estudante.',
      url: 'http://www.camara.gov.br/proposicoesWeb/prop_mostrarintegra?codteor=465833'
    },
    {
      id: 353957,
      sigla: 'PL',
      numero: 1223,
      ano: 2007,
      ementa:
        'Altera dispositivos da Lei nº 6.494, de 7 de dezembro de 1977, a fim de dispor sobre a seleção de estagiários por órgãos públicos, bem como sobre a jornada no contrato de estágio. ',
      keywords:
        'Alteração, Lei do Estágio, obrigatoriedade, Administração Pública, realização, processo seletivo, contratação, estagiário, fixação, limite máximo, carga horária, jornada de trabalho, estudante.',
      url: 'http://www.camara.gov.br/proposicoesWeb/prop_mostrarintegra?codteor=465833'
    },
    {
      id: 353957,
      sigla: 'PL',
      numero: 1223,
      ano: 2007,
      ementa:
        'Altera dispositivos da Lei nº 6.494, de 7 de dezembro de 1977, a fim de dispor sobre a seleção de estagiários por órgãos públicos, bem como sobre a jornada no contrato de estágio. ',
      keywords:
        'Alteração, Lei do Estágio, obrigatoriedade, Administração Pública, realização, processo seletivo, contratação, estagiário, fixação, limite máximo, carga horária, jornada de trabalho, estudante.',
      url: 'http://www.camara.gov.br/proposicoesWeb/prop_mostrarintegra?codteor=465833'
    }
  ],
  totalProjetos: 5,
  totalProposicoes: 6
}
const enhancementStyle = { alignItems: 'center', padding: Metrics.baseMargin }
storiesOf('ProjectProposals', module)
  .addDecorator(storyFn => <View style={enhancementStyle}>{storyFn()}</View>)
  .add('Default', () => <ProjectProposals data={data} />)
