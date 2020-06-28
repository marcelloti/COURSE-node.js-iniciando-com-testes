import chai from "chai"
import Square from "./../src/Square"

const should = chai.should()

describe("Square", () => {
  let square

  beforeEach(() => {
    square = new Square(10)
  })

  it("returns value", () => {
    square.value.should.equals(10)
  })

  it("getArea is equal 100", () => {
    square.getArea().should.equals(100)
  })
})
