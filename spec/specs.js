describe("wordUp", function() {

  it("returns an object with 1 as the value for a single word statement", function() {
    expect(wordUp("juicy")).to.eql([{word: "juicy", count: 1}])
  })

  it("returns the objects with the numerical value for each time it appears", function() {
    expect(wordUp("juicy juicy juicy")).to.eql([{word: "juicy", count: 3}])
  })

  it("returns the correct count even when there is punctuation.", function() {
    expect(wordUp("juicy. juicy? juicy!")).to.eql([{word: "juicy", count: 3}])
  })

  it("returns the correct count regardless of case", function() {
    expect(wordUp("juicy Juicy JUICY")).to.eql([{word: "juicy", count: 3}])
  })

  it('returns the correct count for different words', function() {
    expect(wordUp("juicy juicy squishy squishy squishy")).to.eql([{word: "squishy", count: 3}, {word: "juicy", count: 2}])
  })

  it('returns the correct count for different words', function() {
    expect(wordUp("hey there buddy buddy")).to.eql([{word: "buddy", count: 2}, {word: "hey", count: 1}, {word: "there", count: 1}])
  })

})

describe("countWords", function() {

  it("returns the number of times a words is in an array", function() {
    expect(countWords(["juicy", "juicy", "juicy"], "juicy")).to.equal(3)
  })

})
