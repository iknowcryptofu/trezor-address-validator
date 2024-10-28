const { addressType } = require('../src/crypto/utils');
const base58 = require('./crypto/base58');
const cryptoUtils = require('./crypto/utils');

const prefix = new Uint8Array([6, 161, 159]);
const tr2_prefix = new Uint8Array([6, 161, 161]);
const tr3_prefix = new Uint8Array([6, 161, 164]);
const tr4_prefix = new Uint8Array([6, 161, 166]);
const sr1_prefix = new Uint8Array([6, 124, 117]);
const KT1_prefix = new Uint8Array([2, 90, 121]);

function decodeRaw(buffer) {
    let payload = buffer.slice(0, -4);
    let checksum = buffer.slice(-4);
    let newChecksum = cryptoUtils.hexStr2byteArray(
        cryptoUtils.sha256x2(cryptoUtils.byteArray2hexStr(payload))
    );

    if (checksum[0] ^ newChecksum[0] |
        checksum[1] ^ newChecksum[1] |
        checksum[2] ^ newChecksum[2] |
        checksum[3] ^ newChecksum[3])
        return;
    return payload;
}

const isValidAddress = function(address) {
    try {
        let buffer = base58.decode(address);
        let payload = decodeRaw(buffer);
        if (!payload)
            return false;
        console.log("The Payload is: " + payload);
        payload.slice(prefix.length);
        return true;
    } catch (e) {
        return false;
    }
};

module.exports = {
    isValidAddress,

    getAddressType: function (address, currency, networkType) {
        if (this.isValidAddress(address, currency, networkType)) {
            return addressType.ADDRESS;
        }
        return undefined;
    },
};
