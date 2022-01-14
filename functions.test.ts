const {shuffleArray} = require('./utils')

let arr = [0, 1, 2, 3, 4, 5]

describe('shuffleArray should', () => {
    test('be the same length', () => {
        expect(shuffleArray(arr).length).toEqual(
            arr.length
        )
    })
})

describe('shuffleArray should', () => {
    test('be type array', () => {
        expect(Array.isArray(shuffleArray(arr))).toBe(true)
    });
})