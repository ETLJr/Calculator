
it('should calculate the monthly rate correctly', function () {
  let values = {
    amount: 25000,
    years: 7,
    rate: 4.5
  }
    expect(calculateMonthlyPayment(values)).toEqual('347.50')
});


it("should return a result with 2 decimal places", function() {
  let values ={
    amount: 9989,
    years:  4,
    rate: 2.75
  }
    expect(calculateMonthlyPayment(values)).toEqual('220.00')
});

/// etc
