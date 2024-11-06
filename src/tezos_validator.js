const { addressType } = require('../src/crypto/utils');
const base58 = require('./crypto/base58');
const cryptoUtils = require('./crypto/utils');

const prefix = new Uint8Array([6, 161, 159]);
const tr2_prefix = new Uint8Array([6, 161, 161]);
const tr3_prefix = new Uint8Array([6, 161, 164]);
const tr4_prefix = new Uint8Array([6, 161, 166]);
const sr1_prefix = new Uint8Array([6, 124, 117]);
const KT1_prefix = new Uint8Array([2, 90, 121]);

const arrays = [prefix, tr2_prefix, tr3_prefix, tr4_prefix, sr1_prefix, KT1_prefix];

function decodeRaw(buffer) {
    let payload = buffer.slice(0, -4);
    let checksum = buffer.slice(-4);
    let newChecksum = cryptoUtils.hexStr2byteArray(
        cryptoUtils.sha256x2(cryptoUtils.byteArray2hexStr(payload))
    );
    console.log("The Payload is:" + payload + "\nThe checksums are: " + checksum + "\nThe newChecksums are:" + newChecksum + 
        "\ntr1 decoded:" + base58.decode('tz1Lhf4J9Qxoe3DZ2nfe8FGDnvVj7oKjnMY6'));

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
        console.log("The Payload 2nd version is: " + payload);
        //payload.slice(prefix.length);
        const fixedArray = payload.slice(0,3);
        console.log(fixedArray);
        const matchingID = getMatchingArrayID(arrays, fixedArray);
        console.log(matchingID); 
        return true;
    } catch (e) {
        return false;
    }
};

function getMatchingArrayID(arrays, fixedArray) {
    for (let i = 0; i < arrays.length; i++) {
      const currentArray = arrays[i];
      if (
        currentArray.length === fixedArray.length &&
        currentArray.every((val, index) => val === fixedArray[index])
      ) {
        return `array${i + 1}`; // Return the name based on index
      }
    }
    return null; // Return null if no match is found
  }

//const matchingID = getMatchingArrayID(arrays, fixedArray);
//console.log(matchingID); // Output: array1, array6, etc.

module.exports = {
    isValidAddress,

    getAddressType: function (address, currency, networkType) {
        if (this.isValidAddress(address, currency, networkType)) {
            return addressType.ADDRESS;
        }
        return undefined;
    },
};
