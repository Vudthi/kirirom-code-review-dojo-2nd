"use strict"

//write code in here
const coke = document.getElementById('cocaCola')
const angkor = document.getElementById('angkorBeer')
const lunch = document.getElementById('moringaLunch')
const book = document.getElementById('book')
const goodsToPurchase = document.getElementById('purchaseGoodsName')
const priceToPay = document.getElementById('purchaseGoodsPrice')
const amountGiven = document.getElementById('paymentInput')
const calculateButton = document.getElementById('calculateButton')
const changeAmount = document.getElementById('calculatedChange')

function showDetail(name, price){
    goodsToPurchase.textContent = name
    priceToPay.textContent = price 
}
function calculateChange(){
  const amountReceived = Number(amountGiven.value)
  const goodsPrice = Number(priceToPay.textContent)
  if(amountReceived < goodsPrice){
    alert("Money not enough")
  }
  else{
    const rielChangeAmount = (amountReceived - goodsPrice) * 4091
    changeAmount.textContent = Math.floor(rielChangeAmount)
  }
}

coke.addEventListener('click', () => showDetail('Coca-cola', 1.15))
angkor.addEventListener('click', () => showDetail('Angkor Beer', 2.25))
lunch.addEventListener('click', () => showDetail('Moringa Lunch', 3.5))
book.addEventListener('click', () => showDetail('Book', 4.5))
calculateButton.addEventListener('click', calculateChange)


