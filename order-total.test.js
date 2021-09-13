const orderTotal = require('./order-total.js');

it('calls vatapi.com correctly', () => {
  let isFakeFetchCalled = false;
  const fakeProcess = {
    env: {
      VAT_API_KEY: 'key123',
    }
  }

  const fakeFetch = (url, opts) => {

    // inspect outgoing request
    expect(url).toBe('https://vatapi.com/v1/country-code-check?code=DE')
    expect(opts.headers.apikey).toBe('key123');
    isFakeFetchCalled = true;
    return Promise.resolve({

      // object with various values
      json: () => Promise.resolve({
        rates: {
          standard: {
            value: 19,
          }
        }
      })
    })
  }
  orderTotal(fakeFetch, fakeProcess, {
    country: 'DE',
    items: [
      { 'name': 'Dragon Candy', price: 2, quantity: 3 }
    ]
  }).then(result => {
    // inspect response
    expect(result).toBe(2*3*1.19)
    expect(isFakeFetchCalled).toBe(true)
  })
});


it('Sums', () =>
  orderTotal(null, null, {
    items: [
      { 'name': 'Dragon Cage (small)', price: 400, quantity: 1 },
      { 'name': 'Dragon Bone', price: 15, quantity: 2 },
    ]
  }).then(result => expect(result).toBe(430)));


it("No quantity specified", () =>
  orderTotal(null, null, {
    items: [
      {'name': 'Dragon Candy', price: 2 },
    ]
  }).then(result => expect(result).toBe(2)));
