var XRPValidator = require('./ripple_validator');
var ETHValidator = require('./ethereum_validator');
var BTCValidator = require('./bitcoin_validator');
var ADAValidator = require('./ada_validator');
var XMRValidator = require('./monero_validator');
var LokiValidator = require('./loki_validator');
var NANOValidator = require('./nano_validator');
var SCValidator = require('./siacoin_validator');
var TRXValidator = require('./tron_validator');
var NEMValidator = require('./nem_validator');
var LSKValidator = require('./lisk_validator');
var BCHValidator = require('./bch_validator');
var XLMValidator = require('./stellar_validator');
var BinanceValidator = require('./binance_validator');
var EOSValidator = require('./eos_validator');
var XTZValidator = require('./tezos_validator');
var AEValidator = require('./ae_validator');
var ARDRValidator = require('./ardr_validator');
var ATOMValidator = require('./atom_validator');
var HBARValidator = require('./hbar_validator');
var ICXValidator = require('./icx_validator');
var IOSTValidator = require('./iost_validator');
// var IOTAValidator = require('./iota_validator');
var STEEMValidator = require('./steem_validator');
var SYSValidator = require('./sys_validator');
var ZILValidator = require('./zil_validator');
var NXTValidator = require('./nxt_validator');
var SOLValidator = require('./solana_validator');

// defines P2PKH, P2SH and bech32 address types for standard (prod) and testnet networks
var CURRENCIES = [
    {
        name: 'Bitcoin',
        symbol: 'btc',
        segwitHrp: { prod: 'bc', testnet: 'tb', regtest: 'bcrt' },
        addressTypes: { prod: ['00', '05'], testnet: ['6f', 'c4', '3c', '26'], regtest: ['6f', 'c4', '3c', '26'] },
        validator: BTCValidator,
        nativeToken: true,
    }, {
        name: 'BitcoinCash',
        symbol: 'bch',
        regexp: '^[qQpP]{1}[0-9a-zA-Z]{41}$',
        addressTypes: { prod: ['00', '05'], testnet: ['6f', 'c4'] },
        validator: BCHValidator,
        nativeToken: true,
    }, {
        name: 'Bitcoin Diamond',
        symbol: 'bcd',
        validator: BTCValidator,
        addressTypes: { prod: ['00'] }
	}, {
        name: 'Bitcoin SV',
        symbol: 'bsv',
        regexp: '^[qQ]{1}[0-9a-zA-Z]{41}$',
        addressTypes: { prod: ['00', '05'], testnet: ['6f', 'c4'] },
        validator: BCHValidator,
    }, {
        name: 'Fujicoin',
        symbol: 'fjc',
        segwitHrp: { prod: 'fc', testnet: 'tf' },
        addressTypes: { prod: ['24', '10'], testnet: ['4a', 'c4'] },
        validator: BTCValidator,
    }, {
        name: 'LiteCoin',
        symbol: 'ltc',
        segwitHrp: { prod: 'ltc', testnet: 'tltc' },
        addressTypes: { prod: ['30', '32'], testnet: ['6f', 'c4', '3a'] },
        validator: BTCValidator,
    }, {
        name: 'PeerCoin',
        symbol: 'ppc',
        addressTypes: { prod: ['37', '75'], testnet: ['6f', 'c4'] },
        validator: BTCValidator,
    }, {
        name: 'DogeCoin',
        symbol: 'doge',
        addressTypes: { prod: ['1e', '16'], testnet: ['71', 'c4'] },
        validator: BTCValidator,
    }, {
        name: 'BeaverCoin',
        symbol: 'bvc',
        addressTypes: { prod: ['19', '05'], testnet: ['6f', 'c4'] },
        validator: BTCValidator,
    }, {
        name: 'ProtoShares',
        symbol: 'pts',
        addressTypes: { prod: ['38', '05'], testnet: ['6f', 'c4'] },
        validator: BTCValidator,
    }, {
        name: 'MegaCoin',
        symbol: 'mec',
        addressTypes: { prod: ['32', '05'], testnet: ['6f', 'c4'] },
        validator: BTCValidator,
    }, {
        name: 'PrimeCoin',
        symbol: 'xpm',
        addressTypes: { prod: ['17', '53'], testnet: ['6f', 'c4'] },
        validator: BTCValidator,
    }, {
        name: 'AuroraCoin',
        symbol: 'aur',
        addressTypes: { prod: ['17', '05'], testnet: ['6f', 'c4'] },
        validator: BTCValidator,
    }, {
        name: 'NameCoin',
        symbol: 'nmc',
        addressTypes: { prod: ['34'], testnet: [] },
        validator: BTCValidator,
    }, {
        name: 'NXT',
        symbol: 'nxt',
        validator: NXTValidator,
        nativeToken: true,
    }, {
        name: 'BioCoin',
        symbol: 'bio',
        addressTypes: { prod: ['19', '14'], testnet: ['6f', 'c4'] },
        validator: BTCValidator,
    }, {
        name: 'GarliCoin',
        symbol: 'grlc',
        addressTypes: { prod: ['26', '05'], testnet: ['6f', 'c4'] },
        validator: BTCValidator,
    }, {
        name: 'VertCoin',
        symbol: 'vtc',
        segwitHrp: { prod: 'vtc', testnet: 'tvtc' },
        addressTypes: { prod: ['47', '05'], testnet: ['4a', 'c4', '6f'] },
        validator: BTCValidator,
    }, {
        name: 'BitcoinGold',
        symbol: 'btg',
        segwitHrp: { prod: 'btg', testnet: 'tbtg' },
        addressTypes: { prod: ['26', '17'], testnet: ['6f', 'c4'] },
        validator: BTCValidator,
    }, {
        name: 'Komodo',
        symbol: 'kmd',
        addressTypes: { prod: ['3c', '55'], testnet: ['0', '5'] },
        validator: BTCValidator,
    }, {
        name: 'BitcoinZ',
        symbol: 'btcz',
        expectedLength: 26,
        addressTypes: { prod: ['1cb8', '1cbd'], testnet: ['1d25', '1cba'] },
        validator: BTCValidator,
    }, {
        name: 'BitcoinPrivate',
        symbol: 'btcp',
        expectedLength: 26,
        addressTypes: { prod: ['1325', '13af'], testnet: ['1957', '19e0'] },
        validator: BTCValidator,
    }, {
        name: 'Hush',
        symbol: 'hush',
        expectedLength: 26,
        addressTypes: { prod: ['1cb8', '1cbd'], testnet: ['1d25', '1cba'] },
        validator: BTCValidator,
    }, {
        name: 'SnowGem',
        symbol: 'sng',
        expectedLength: 26,
        addressTypes: { prod: ['1c28', '1c2d'], testnet: ['1d25', '1cba'] },
        validator: BTCValidator,
    }, {
        name: 'ZCash',
        symbol: 'zec',
        expectedLength: 26,
        addressTypes: { prod: ['1cb8', '1cbd'], testnet: ['1d25', '1cba'] },
        validator: BTCValidator,
    }, {
        name: 'ZClassic',
        symbol: 'zcl',
        expectedLength: 26,
        addressTypes: { prod: ['1cb8', '1cbd'], testnet: ['1d25', '1cba'] },
        validator: BTCValidator,
    }, {
        name: 'ZenCash',
        symbol: 'zen',
        expectedLength: 26,
        addressTypes: { prod: ['2089', '2096'], testnet: ['2092', '2098'] },
        validator: BTCValidator,
    }, {
        name: 'VoteCoin',
        symbol: 'vot',
        expectedLength: 26,
        addressTypes: { prod: ['1cb8', '1cbd'], testnet: ['1d25', '1cba'] },
        validator: BTCValidator,
    }, {
        name: 'Decred',
        symbol: 'dcr',
        addressTypes: { prod: ['073f', '071a'], testnet: ['0f21', '0efc'] },
        hashFunction: 'blake256',
        expectedLength: 26,
        validator: BTCValidator,
    }, {
        name: 'GameCredits',
        symbol: 'game',
        segwitHrp: { prod: 'game',  prod: 'tgame' },
        addressTypes: { prod: ['26', '3e'], testnet: ['6f', '3a'] },
        validator: BTCValidator,
    }, {
        name: 'PIVX',
        symbol: 'pivx',
        addressTypes: { prod: ['1e', '0d'], testnet: [] },
        validator: BTCValidator,
    }, {
        name: 'SolarCoin',
        symbol: 'slr',
        addressTypes: { prod: ['12', '05'], testnet: [] },
        validator: BTCValidator,
    }, {
        name: 'MonaCoin',
        symbol: 'mona',
        segwitHrp: { prod: 'mona',  prod: 'tmona' },
        addressTypes: { prod: ['32', '37'], testnet: ['6f', '75'] },
        validator: BTCValidator,
    }, {
        name: 'DigiByte',
        symbol: 'dgb',
        segwitHrp: { prod: 'dgb' },
        addressTypes: { prod: ['1e', '3f'], testnet: [] },
        validator: BTCValidator,
    }, {
        name: 'Tether',
        symbol: 'usdt',
        addressTypes: { prod: ['00', '05'], testnet: ['6f', 'c4'] },
        validator: BTCValidator,
    }, {
        name: 'Ripple',
        symbol: 'xrp',
        validator: XRPValidator,
        nativeToken:true,
    }, {
        name: 'Dash',
        symbol: 'dash',
        addressTypes: { prod: ['4c', '10'], testnet: ['8c', '13'] },
        validator: BTCValidator,
    }, {
        name: 'Neo',
        symbol: 'neo',
        addressTypes: { prod: ['17'], testnet: [] },
        validator: BTCValidator,
    }, {
        name: 'NeoGas',
        symbol: 'gas',
        addressTypes: { prod: ['17'], testnet: [] },
        validator: BTCValidator,
    }, {
        name: 'Qtum',
        symbol: 'qtum',
        segwitHrp: { prod: 'qc',  prod: 'tq' },
        addressTypes: { prod: ['3a', '32'], testnet: ['78', '6e'] },
        validator: BTCValidator,
    }, {
        name: 'Waves',
        symbol: 'waves',
        addressTypes: { prod: ['0157'], testnet: ['0154'] },
        expectedLength: 26,
        hashFunction: 'blake256keccak256',
        regex: /^[a-zA-Z0-9]{35}$/,
        validator: BTCValidator,
    }, {
        name: 'Ontology',
        symbol: 'ont',
        validator: BTCValidator,
        addressTypes: { prod: ['17', '41'] }
    }, {
        name: 'Ravencoin',
        symbol: 'rvn',
        validator: BTCValidator,
        addressTypes: { prod: ['3c'] }
    }, {
        name: 'Groestlcoin',
        symbol: 'grs',
        addressTypes: { prod: ['24', '05'], testnet: ['6f', 'c4'] },
        segwitHrp: { prod: 'grs', testnet: 'tgrs' },
        hashFunction: 'groestl512x2',
        validator: BTCValidator
    }, {
        name: 'Ethereum',
        symbol: 'eth',
        validator: ETHValidator,
        nativeToken: true,
    }, {
        name: 'Cardano',
        symbol: 'ada',
        segwitHrp: { prod: 'addr', testnet: 'addr_test' },
        validator: ADAValidator,
        nativeToken: true,
    }, {
        name: 'Monero',
        symbol: 'xmr',
        addressTypes: { prod: ['18'], testnet: ['53'] },
        subAddressTypes: { prod: ['42'], testnet: ['63'] },
        iAddressTypes: { prod: ['19'], testnet: ['54'] },
        validator: XMRValidator,
        nativeToken: true,
    }, {
        name: 'Ardor',
        symbol: 'ardr',
        validator: ARDRValidator,
        nativeToken: true,
    }, {
        name: 'STEEM',
        symbol: 'steem',
        validator: STEEMValidator,
        nativeToken: true,
    }, {
        name: 'Stratis',
        symbol: 'strat',
        validator: BTCValidator,
        addressTypes: { prod: ['3f'] }
    }, {
        name: 'Syscoin',
        symbol: 'sys',
        addressTypes: { prod: ['3f'] },
        validator: SYSValidator,
        nativeToken: true,
    }, {
        name: 'Cosmos',
        symbol: 'atom',
        validator: ATOMValidator,
        nativeToken: true,
    }, {
        name: 'Aeternity',
        symbol: 'ae',
        validator: AEValidator,
        nativeToken: true,
    }, {
        name: 'ICON',
        symbol: 'icx',
        validator: ICXValidator,
        nativeToken: true,
    }, {
        name: 'Internet of Services',
        symbol: 'IOST',
        validator: IOSTValidator,
        nativeToken: true,
    // disable iota validation for now
    // }, {
    //     name: 'Iota',
    //     symbol: 'iota',
    //     validator: IOTAValidator,
    }, {
        name: 'Nano',
        symbol: 'nano',
        validator: NANOValidator,
        nativeToken: true,
    }, {
        name: 'RaiBlocks',
        symbol: 'xrb',
        validator: NANOValidator,
    }, {
        name: 'Siacoin',
        symbol: 'sc',
        validator: SCValidator,
        nativeToken: true,
    }, {
        name: 'HyperSpace',
        symbol: 'xsc',
        validator: SCValidator,
    }, {
        name: 'Loki',
        symbol: 'loki',
        addressTypes: { prod: ['114', '116'], testnet: ['156'] },
        subAddressTypes: { prod: ['114', '116'], testnet: ['158'] },
        iAddressTypes: { prod: ['115'], testnet: ['157'] },
        validator: LokiValidator,
        nativeToken: true,
    }, {
        name: 'LBRY Credits',
        symbol: 'lbc',
        addressTypes: { prod: ['55'], testnet: [] },
        validator: BTCValidator,
    }, {
        name: 'Tron',
        symbol: 'trx',
        addressTypes: { prod: [0x41], testnet: [0xa0] },
        validator: TRXValidator,
        nativeToken: true,
    }, {
        name: 'Nem',
        symbol: 'xem',
        validator: NEMValidator,
        nativeToken: true,
    }, {
        name: 'Lisk',
        symbol: 'lsk',
        validator: LSKValidator,
        nativeToken: true,
    }, {
        name: 'Stellar',
        symbol: 'xlm',
        validator: XLMValidator,
        nativeToken: true,
    }, {
        name: 'Scopuly',
        symbol: 'sky',
        validator: XLMValidator,
    }, 
    //}, {
    //    name: 'PitisCoin',
    //    symbol: 'pts', # FIXME: symbol collides with ProtoShares
    //    validator: BTCValidator,
    {
        name: 'Solana',
        symbol: 'sol',
        validator: SOLValidator,
        nativeToken: true,
    }, {
        name: 'Binance',
        symbol: 'bnb',
        validator: BinanceValidator,
        nativeToken: true,
    }, {
      name: 'EOS',
      symbol: 'eos',
      validator: EOSValidator,
      nativeToken: true,
    }, {
        name: 'Tezos',
        symbol: 'xtz',
        validator: XTZValidator,
        nativeToken: true,
    }, {
        name: 'Hedera Hashgraph',
        symbol: 'hbar',
        validator: HBARValidator,
        nativeToken: true,
    }, {
        name: 'Verge',
        symbol: 'xvg',
        addressTypes: { prod: ['1e'], testnet: ['6F'] },
        validator: BTCValidator,
    }, {
        name: 'Zilliqa',
        symbol: 'zil',
        validator: ZILValidator,
        nativeToken: true,
	}
];


module.exports = {
    getByNameOrSymbol: function (currencyNameOrSymbol) {
        var nameOrSymbol = currencyNameOrSymbol.toLowerCase();
        return CURRENCIES.find(function (currency) {
            return currency.name.toLowerCase() === nameOrSymbol || currency.symbol.toLowerCase() === nameOrSymbol
        });
    },
    getAll: function () {
        return CURRENCIES;
    }
};

// spit out details for readme.md
// CURRENCIES
//     .sort((a, b) => a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1)
//     .forEach(c => console.log(`* ${c.name}/${c.symbol} \`'${c.name}'\` or \`'${c.symbol}'\` `));

//spit out keywords for package.json
// CURRENCIES
//     .sort((a, b) => a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1)
//     .forEach(c => console.log(`"${c.name}","${c.symbol}",`));


