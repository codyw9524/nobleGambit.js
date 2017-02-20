require('mocha')
const chai = require('chai')
const expect = chai.expect;

const Tile = require('../app/Tile.js')
const Board = require('../app/Board.js')
const Pawn = require('../app/pieces/Pawn.js')
const Rook = require('../app/pieces/Rook.js')
const Knight = require('../app/pieces/Knight.js')
const Bishop = require('../app/pieces/Bishop.js')
const King = require('../app/pieces/King.js')
const Queen = require('../app/pieces/Queen.js')

describe('Board class', function() {
  it('should inherit from Array', function() {
    let b  = new Board()
    expect(b instanceof Array).to.be.true
  });
  it('should have 8 rows', function() {
    let b = new Board()
    expect(b.length).to.equal(8)
  });
  it('should have 8 columns', function() {
    let b = new Board()
    b.every((row)=>expect(row.length).to.equal(8))
  });
  it('should contains only Tiles', function() {
    let b = new Board()
    each2d(b,tile=>expect( tile instanceof Tile).to.be.true)
  });
  it('should have alternating colors', function() {
    let b = new Board()
    let color1 = b[0][1].color
    let color2 = b[0][0].color
    expect(color1).to.not.equal(color2)
    let colors = map2d(b,tile=>tile.color)
    // figure out how to test alternating colors
  });
  it('should have .init() method', function() {
    let b = new Board()
    expect("init" in b).to.be.true
    expect(typeof b.init).to.equal("function")
    b.init()
  });
});
describe('Board.init() method', function() {
  it('should correctly populate row 1', function() {
    let b = new Board()
    b.init({},{})
    let name = (tile)=>tile.piece.constructor.name
    let r1 = b[0]
    expect(name(r1[0])).to.equal("Rook")
    expect(name(r1[1])).to.equal("Knight")
    expect(name(r1[2])).to.equal("Bishop")
    expect(name(r1[3])).to.equal("Queen")
    expect(name(r1[4])).to.equal("King")
    expect(name(r1[5])).to.equal("Bishop")
    expect(name(r1[6])).to.equal("Knight")
    expect(name(r1[7])).to.equal("Rook")

  });
});



function each2d(board,fn){
  board.forEach((row)=>{
    row.forEach((tile)=>fn(tile))
  })
}
function map2d(board,fn){
  return board.map((row)=>{
    return row.map(fn)
  })
}
