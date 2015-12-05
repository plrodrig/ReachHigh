describe("calculator", function() {
  it("add() should return the sum of 2 numbers", function() {
    // Arrange, Act
    var sum = calculator.add(4, 5);

    // Assert
    expect(sum).toEqual(9);
  });

  it("add() should return the number passed in if only 1 number is passed in", function() {
    var sum = calculator.add(9);
    expect(sum).toEqual(9);
  });
});
