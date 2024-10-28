var WAValidator = require('trezor-address-validator');
var { jsonCurrencies } = require('./helpers/currencies_split/currenciesJsonFinal.js');
var fs = require('fs');

var valid = WAValidator.validate('1KFzzGtDdnq5hrwxXGjwVnKzRbvf8WVxck', 'xtz');
var valid2 = WAValidator.validate('abcssssssssssssssssssssssssss', 'STEEM');
var valid3 = WAValidator.validate('tz1Lhf4J9Qxoe3DZ2nfe8FGDnvVj7oKjnMY6', 'xtz');
var valid4 = WAValidator.validate('KT1EM2LvxxFGB3Svh9p9HCP2jEEYyHjABMbK', 'xtz');
//console.log(WAValidator.getAddressType('1KFzzGtDdnq5hrwxXGjwVnKzRbvf8WVxck', 'abc'));
//console.log(WAValidator.getAddressType('abc', 'STEEM'));
if(valid3)
	console.log('This tz1 xtz is a valid address');
else
	console.log('Address tz1 INVALID');
if(valid4)
	console.log('This KT1 is a valid address');
else
	console.log('Address KT1 INVALID');
if(valid)
	console.log('This is a mistaken BTC valid address');
else
	console.log('Address xtz properly INVALID');


// This will log 'This is a valid address' to the console.

//console.log(WAValidator.getCurrencies());

const allCurr = WAValidator.getCurrencies();

console.log(allCurr.length);

//console.log(JSON.stringify(jsonCurrencies));

// var i = 0;
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

