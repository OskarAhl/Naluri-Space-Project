const expect = require('chai').expect
const { PIGenerator } = require('./PI-generator')

describe('PI-generator', () => {
    it('should generate sequence of PI', () => {
        let PI = PIGenerator.next().value
        expect(PI).to.equal(3)

        PI = PIGenerator.next().value
        expect(PI).to.equal(1)

        PI = PIGenerator.next().value
        expect(PI).to.equal(4)

        PI = PIGenerator.next().value
        expect(PI).to.equal(1)
    })
})
