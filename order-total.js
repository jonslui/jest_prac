// when testing, a fake fetch function will be provided which returns the expected output from the api
async function orderTotal(fetch, process, order){
  if(order.country){ 
    try {
      const response = await fetch('https://vatapi.com/v1/country-code-check?code=' + order.country, {
        headers: {
          apikey: process.env.VAT_API_KEY,
        }
      });
      const data = await response.json();
      const vat = data.rates.standard.value;
      const adjustedPrice = order.items.reduce((prev, cur) => cur.price * (cur.quantity || 1) + prev, 0) * (1 + vat/100);
      
      return adjustedPrice;
    } catch(err) {
      console.log(err);
    }
  }

  return order.items.reduce((prev, cur) => cur.price * (cur.quantity || 1) + prev, 0);
}

module.exports = orderTotal;
