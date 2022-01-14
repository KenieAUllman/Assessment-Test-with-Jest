const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test('array should contain crowbar & the hammer ', () => {
        expect(shuffleArray).toEqual(
            expect.arrayContaining([
                expect.objectContaining({name: 'The Hammer'}),
                expect.objectContaining({name: 'crowbar'})
            ])
        )
    })
})

describe('shuffleArray should', () => {
    test('should be type array', () => {
        expect(typeof shuffleArray).toBe('array')
    })
})