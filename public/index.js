//stuff
//more stuff
'use strict'

window.onload = () => {
  getStore()
  purchase()
}

let getStore = () => {
  fetch('../db.json')
  .then(function(response) {
    // console.log('this is the response', response)
    return response.json()
  })
  .then(function(json) {
    // console.log('json', json)
    let result = json.products
    // console.log('json result :', result)
    return result
  })
  .then(function(result) {
    result.forEach(purchase)
  })
}

let purchase = (item) => {
  console.log('and each item in the array',item)
}