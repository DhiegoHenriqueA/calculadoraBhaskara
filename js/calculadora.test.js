import {delta, bhaskara} from './calculadora'

it('Delta de a=2, b=8, c=-24', () => {
    expect(delta(2,8,-24)).toBe(256)
})

it('Bhaskara de a=2, b=8, c=-24', () => {
    expect(bhaskara(2,8,-24, 256)).toEqual({x1: -6, x2:2})
})

