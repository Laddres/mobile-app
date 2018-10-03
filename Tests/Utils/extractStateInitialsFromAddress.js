import { extractStateInitialsFromAddress } from '../../App/Lib/Utils'

describe('extractStateInitialsFromAddress', () => {
  test('for valid address', () => {
    const address = 'State of Sergipe, Brazil'
    const result = extractStateInitialsFromAddress(address)
    expect(result).toBe('SE')
  })

  test('for invalid address', () => {
    const address = 'No address available'
    const result = extractStateInitialsFromAddress(address)
    expect(result).toBe(null)
  })

  test('for undefined address', () => {
    const address = undefined
    const result = extractStateInitialsFromAddress(address)
    expect(result).toBe(null)
  })

  test('for invalid address type', () => {
    const address = 11123
    const result = extractStateInitialsFromAddress(address)
    expect(result).toBe(null)
  })
})
