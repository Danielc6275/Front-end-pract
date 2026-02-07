// Challenge:
// Round the price in the button down to two decimal places.
// Don't know which method to use? Google it!

//One thing you might expect is that you want one data type,
//but another is resulted.

const totalPrice = "420.69235632455"
const btn = document.getElementById("purchase-btn")
// btn.textContent = `Buy €${ Math.round(Number(totalPrice) * 100) / 100 }`

//You could also do 
btn.textContent = `Buy €${ Number(totalPrice).toFixed(2) }`