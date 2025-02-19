# trezor-address-validator
Simple wallet address validator for validating Bitcoin and other altcoins addresses in **Node.js and browser**.

Forked from [ryanralph/altcoin-address](https://github.com/ryanralph/altcoin-address).

**File size is ~65 kB (minifed and gzipped)**.

## Installation

### NPM
```
npm install trezor-address-validator
```

### Browser
```html
<script src="wallet-address-validator.min.js"></script>
```

## API

##### validate (address [, currency = 'bitcoin'[, networkType = 'prod']])

###### Parameters
* address - Wallet address to validate.
* currency - Optional. Currency name or symbol, e.g. `'bitcoin'` (default), `'litecoin'` or `'LTC'`
* networkType - Optional. Use `'prod'` (default) to enforce standard address, `'testnet'` to enforce testnet address and `'both'` to enforce nothing.

> Returns true if the address (string) is a valid wallet address for the crypto currency specified, see below for supported currencies.


##### getAddressType (address [, currency = 'bitcoin'[, networkType = 'prod']])

###### Parameters
* address - Wallet address to validate.
* currency - Optional. Currency name or symbol, e.g. `'bitcoin'` (default), `'litecoin'` or `'LTC'`
* networkType - Optional. Use `'prod'` (default) to enforce standard address, `'testnet'` to enforce testnet address and `'both'` to enforce nothing.

> Returns address type (`'address' | 'p2pkh' | 'p2wpkh' | 'p2wsh' | 'p2sh' | 'p2tr' | 'pw-unknown'`) of the address or `undefined` if the address is invalid.
### Supported crypto currencies

* Aeternity/ae `'Aeternity'` or `'ae'` 
* Ardor/ardr `'Ardor'` or `'ardr'` 
* AuroraCoin/aur `'AuroraCoin'` or `'aur'` 

* Binance/bnb `'Binance'` or `'bnb'` 
* BioCoin/bio `'BioCoin'` or `'bio'` 
* Bitcoin/btc `'Bitcoin'` or `'btc'` 
* Bitcoin SV/bsv `'Bitcoin SV'` or `'bsv'` 
* BitcoinCash/bch `'BitcoinCash'` or `'bch'` 
* BitcoinGold/btg `'BitcoinGold'` or `'btg'` 
* BitcoinPrivate/btcp `'BitcoinPrivate'` or `'btcp'` 
* BitcoinZ/btcz `'BitcoinZ'` or `'btcz'` 
* Cardano/ada `'Cardano'` or `'ada'` 
* Cosmos/atom `'Cosmos'` or `'atom'` 
* Dash/dash `'Dash'` or `'dash'` 
* Decred/dcr `'Decred'` or `'dcr'` 
* DigiByte/dgb `'DigiByte'` or `'dgb'` 
* DogeCoin/doge `'DogeCoin'` or `'doge'` 
* EOS/eos `'EOS'` or `'eos'` 
* Ethereum/eth `'Ethereum'` or `'eth'` 

* GameCredits/game `'GameCredits'` or `'game'` 
* GarliCoin/grlc `'GarliCoin'` or `'grlc'` 
* Groestlcoin/grs `'Groestlcoin'` or `'grs'` 
* Hedera Hashgraph/hbar `'Hedera Hashgraph'` or `'hbar'` 
* Hush/hush `'Hush'` or `'hush'` 
* HyperSpace/xsc `'HyperSpace'` or `'xsc'` 
* ICON/icx `'ICON'` or `'icx'` 
* Internet of Services/IOST `'Internet of Services'` or `'IOST'` 
* Komodo/kmd `'Komodo'` or `'kmd'` 
* LBRY Credits/lbc `'LBRY Credits'` or `'lbc'` 
* Lisk/lsk `'Lisk'` or `'lsk'` 
* LiteCoin/ltc `'LiteCoin'` or `'ltc'` 
* Loki/loki `'Loki'` or `'loki'` 
* MegaCoin/mec `'MegaCoin'` or `'mec'` 
* MonaCoin/mona `'MonaCoin'` or `'mona'` 
* Monero/xmr `'Monero'` or `'xmr'` 
* NameCoin/nmc `'NameCoin'` or `'nmc'` 
* Nano/nano `'Nano'` or `'nano'` 
* Nem/xem `'Nem'` or `'xem'` 
* Neo/neo `'Neo'` or `'neo'` 
* NeoGas/gas `'NeoGas'` or `'gas'` 
* NXT/nxt `'NXT'` or `'nxt'` 
* Ontology/ont `'Ontology'` or `'ont'` 
* PeerCoin/ppc `'PeerCoin'` or `'ppc'` 
* PIVX/pivx `'PIVX'` or `'pivx'` 
* PrimeCoin/xpm `'PrimeCoin'` or `'xpm'` 

* Qtum/qtum `'Qtum'` or `'qtum'` 
* RaiBlocks/xrb `'RaiBlocks'` or `'xrb'` 
* Ravencoin/rvn `'Ravencoin'` or `'rvn'` 
* Ripple/xrp `'Ripple'` or `'xrp'` 
* Scopuly/sky `'Scopuly'` or `'sky'` 
* Siacoin/sc `'Siacoin'` or `'sc'` 
* SnowGem/sng `'SnowGem'` or `'sng'` 
* Solana/sol `'Solana'` or `'sol'` 
* SolarCoin/slr `'SolarCoin'` or `'slr'` 
* STEEM/steem `'STEEM'` or `'steem'` 
* Stellar/xlm `'Stellar'` or `'xlm'` 
* Stratis/strat `'Stratis'` or `'strat'` 
* Syscoin/sys `'Syscoin'` or `'sys'` 
* Tezos/xtz `'Tezos'` or `'xtz'` 
* Tron/trx `'Tron'` or `'trx'` 
* Verge/xvg `'Verge'` or `'xvg'` 
* VertCoin/vtc `'VertCoin'` or `'vtc'` 
* VoteCoin/vot `'VoteCoin'` or `'vot'` 
* Waves/waves `'Waves'` or `'waves'` 
* ZCash/zec `'ZCash'` or `'zec'` 
* ZClassic/zcl `'ZClassic'` or `'zcl'` 
* ZenCash/zen `'ZenCash'` or `'zen'` 
* Zilliqa/zil `'Zilliqa'` or `'zil'` 
### Usage example

#### Node
```javascript
var WAValidator = require('trezor-address-validator');

var valid = WAValidator.validate('1KFzzGtDdnq5hrwxXGjwVnKzRbvf8WVxck', 'BTC');
if(valid)
	console.log('This is a valid address');
else
	console.log('Address INVALID');

// This will log 'This is a valid address' to the console.
```

```javascript
var WAValidator = require('trezor-address-validator');

var valid = WAValidator.validate('1KFzzGtDdnq5hrwxXGjwVnKzRbvf8WVxck', 'litecoin', 'testnet');
if(valid)
      console.log('This is a valid address');
else
      console.log('Address INVALID');

// As this is a invalid litecoin address 'Address INVALID' will be logged to console.
```

```javascript
var WAValidator = require('trezor-address-validator');

var currency = WAValidator.findCurrency('xrp');
if(currency)
      console.log('This currency exists');
else
      console.log('Currency INVALID');

// As this is a valid currency symbol 'This currency exists' will be logged to console.
```

```javascript
var WAValidator = require('trezor-address-validator');

var currency = WAValidator.findCurrency('random');
if(currency)
      console.log('This currency exists');
else
      console.log('Currency INVALID');

// As this is not a valid currency symbol 'Currency INVALID' will be logged to console.
```
#### Browser
```html
<script src="wallet-address-validator.min.js"></script>
```

```javascript
// WAValidator is exposed as a global (window.WAValidator)
var valid = WAValidator.validate('1KFzzGtDdnq5hrwxXGjwVnKzRbvf8WVxck', 'bitcoin');
if(valid)
    alert('This is a valid address');
else
    alert('Address INVALID');

// This should show a pop up with text 'This is a valid address'.
```
