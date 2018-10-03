import { generateCandidatesQueryWithFilters } from '../../App/Lib/Utils'

describe('generateCandidatesQueryWithFilters', () => {
  test('with all options selected', () => {
    const options = { gender: 'feminino', state: 'SE', raceOrColor: 'preta' }
    const result = generateCandidatesQueryWithFilters(options)
    expect(result).toEqual({ corRaca: 'preta', estado: 'SE', genero: 'feminino' })
  })
  test('with raceOrColor default', () => {
    const options = { gender: 'feminino', state: 'SE', raceOrColor: 'todos' }
    const result = generateCandidatesQueryWithFilters(options)
    expect(result).toEqual({ genero: 'feminino', estado: 'SE' })
  })
  test('with gender default', () => {
    const options = { gender: 'todos', state: 'SE', raceOrColor: 'todos' }
    const result = generateCandidatesQueryWithFilters(options)
    expect(result).toEqual({ estado: 'SE' })
  })
})
