//split allCurrencies object of list of crypto currencies according to eth
var WAValidator = require('trezor-address-validator');
//var ETHValidator = require('../trezor-address-validator/src/ethereum_validator');
//var ETHValidator = "";
//var curr = require('./currenciestxt');

var fs = require('fs');
//import {curr }from "./currenciestxt.js";
//var allCurrencies = WAValidator.getCurrencies();
//var excludeEth = allCurrencies.filter(checkForEth);

// function checkForEth(item){
//     return item.validator != ETHValidator;
// }

// function checkForEth(item){
//     return item.symbol == "zil";
// }

//console.log(excludeEth);
//the following finds 271 currencies in CURRENCIES array var.
//console.log(allCurrencies.length);

//console.log(excludeEth.length);
/*function checkForEth(item){
    return item.validator != ETHValidator;
}
*/
//console.log(excludeEth);
//var buf = Buffer.from(excludeEth);
//console.log(buf);
/*fs.writeFile('currenciesTest.js',JSON.stringify(excludeEth), function(err) {
    if(err) {
        console.log(err);
    }
});
*/
/*function checkForEth(item){
    return item.validator == ETHValidator;
}

console.log(excludeEth);
fs.appendFile('currenciesne.js', JSON.stringify(excludeEth), function(err) {
    if(err) {
        console.log(err);
    }
});
*/

// Use the map method to create a new array containing selected objects
/*const copiedObjects = allCurrencies
  .filter(obj => obj.symbol === 'zil')
  .map(obj => ({ ...obj })); // Use object spread to create a shallow copy of the object

function clone(a) {
    return JSON.parse(JSON.stringify(a));
    
 }

 console.log(clone(copiedObjects));
*/

  // for (const obj of allCurrencies) {
  //   //obj.funcText = obj.validator.isValidAddress.toString();
  //   obj.funcText = obj.validator.isValidAddress.toString();
  // }
  
  //console.log(allCurrencies);

  // var firstCurrency = allCurrencies[0];
  // //firstCurrency.funcText = firstCurrency.validator.getAddressType.toString();
  // let valuesArray = Object.values(firstCurrency);
  // console.log(valuesArray);


//console.log(JSON.parse(r));
// fs.writeFile("currenciesTest.txt", JSON.stringify(r), function(err) {
//   if(err) {
//       console.log(err);
//   }
// });

// const {CURRENCIES} = require("./currencies");

// console.log(CURRENCIES.length);