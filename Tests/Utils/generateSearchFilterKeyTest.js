import { generateSearchFilterKey } from '../../App/Lib/Utils'

describe('generateSearchFilterKey', () => {
  test('with valid options', () => {
    const options = { gender: 'feminino', state: 'SE', raceOrColor: 'preta', favorites: true }
    const result = generateSearchFilterKey(options)
    expect(result).toBe('FEMININO.PRETA.SE.TRUE')
  })
})
