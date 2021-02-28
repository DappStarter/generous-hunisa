require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess clock off tooth warrior ridge remember attitude hover entire success gas'; 
let testAccounts = [
"0x0dd49861fe8753a0f0750fb7b70ad00e9852a528cf60ae3a71d1ff255fbb83b7",
"0x5b8f8e2ed4fc96e976e5664d3fedd2bf0ec541107af49df76e0846171929a4ed",
"0xd43a6ac7ed1497fa240fdeb779c437f3747a3146c119fc7f3d7d12b00b727ebd",
"0xe161749c25e52a47960b4c3118335cf5aec097db8109182475c5d826157666f5",
"0x17b9f337d3d73003e70acb8bbe3c0ed2c64ac470d4f3493151e4347a5db63c79",
"0x4a43a04a12f868949962ec14242c3cbea60e19aa00958b4d871c48040493b32e",
"0xdc61cd71fad9fbba69e5e1094f612cb82e345b1d49a1331d32284c03bc8b149c",
"0x756f71ae79938c7c95a53d15ddf5b776be8a55c0713058db192bcf58ed4a0b2b",
"0x88ff68bf4324ecca2a854b78ace856e17fdfc64db1e42cc902fdd1061e9a1b5d",
"0xbf57b92f2243c1fa9d2cdf802830a13429f1b9cd7c66e5a97bc9605c0d113d02"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
