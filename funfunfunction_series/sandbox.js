const response = 
  fetch( 'https://nominatim.openstreetmap.org/?addressdetails=1&q='
    + 'Collegeville'
    + '&format=json&limit=1',
    { mode: 'cors' },
  )
  .then(response => {
    // return response.json();
    return response.json();
  }).then(responseJSON => {
    console.log(responseJSON[0].address)
  })

response