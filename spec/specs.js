describe('removeSpace', function(){
  it("removes all white space from a string", function(){
    expect(removeSpace("this is a test string")).to.equal("thisisateststring");
  });

  it("removes all punctuation from a string", function(){
    expect(removeSpace("this, is a. test string!")).to.equal("thisisateststring");
  });

  it("downcases the given string", function(){
    expect(removeSpace("THIS IS a TeSt StrIng")).to.equal("thisisateststring");
  });

});

describe('findSquare', function(){
  it("detects presence of square, creates columns and rows", function(){
    expect(findSquare("dat cat rad")).to.equal(3);
  });

  it("rounds up to nearest square when not an even square root", function(){
    expect(findSquare("dat cat rads")).to.equal(4);
  });

});

describe('makeSquare', function(){
  it("splits the string into the appropriate square lengths", function(){
    expect(makeSquare("dat fat cats")).to.include.members(["datf", "atca", "ts"]);
  });

  it("splits the string into the appropriate square lengths", function(){
    expect(makeSquare("dat fat cat")).to.include.members(["dat", "fat", "cat"]);
  });

});
