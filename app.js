var WAValidator = require('trezor-address-validator');
var { jsonCurrencies } = require('./helpers/currencies_split/currenciesJsonFinal.js');
var fs = require('fs');

var valid = WAValidator.validate('1KFzzGtDdnq5hrwxXGjwVnKzRbvf8WVxck', 'BTC');
var valid2 = WAValidator.validate('abcssssssssssssssssssssssssss', 'STEEM');
//console.log(WAValidator.getAddressType('abc', 'STEEM'));
if(valid2)
	console.log('This is a valid address');
else
	console.log('Address INVALID');

// This will log 'This is a valid address' to the console.

//console.log(WAValidator.getCurrencies());

const allCurr = WAValidator.getCurrencies();

console.log(allCurr.length);

//console.log(JSON.stringify(jsonCurrencies));
var i = 0;
// var ele = [];
// for(const [index,element] of jsonCurrencies.entries()) {
// 	if(element.validator !="ETHValidator") {
// 		i++;
// 		//console.log(element);
// 		var vali = element.validator;
// 		vali.replace(/['"]+/g, '');
// 		element.validator = vali;
// 		ele.push(element);
// 		console.log(ele);
// 	}
	
// }
// fs.writeFile('newdata.js',JSON.stringify(ele), function(err) {
// 	if(err) {
// 		console.log(err);
// 	}
// });

//var jsonResults2 = jsonCurrencies.filter(({validator}) => validator !== "ETHValidator");
//console.log(JSON.stringify(jsonResults2));

