require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney kiwi onion skull drift rescue stereo provide gesture photo equal genre'; 
let testAccounts = [
"0x27e33d7394940fc55ec00060f8886fe3aa663d8a6c44b3f882eba6d9a74b72b2",
"0xf0924c5b49842e264f24c72e8ea21983ecee23ef3af1fd8397cfd046c9499e72",
"0x2adbf8c0fe006ada27dc45347a13971c0a3aefe5b9cd6b43c5abc07de8d217ee",
"0x5694cb0d2f6b8a3c699f260d7a580674437d2dddaa29849c0716ef73919b0bbc",
"0x34d0291069c6a819cd6462d09dbe0aef06bcb8cbf321f1c22f15ef39969ffcc0",
"0x2843cd978d1e3e88be8664508551a4e3ae10b272f98e6f1e3a11ff3acd5cbe68",
"0xaa0f5530aa53e3d84f146024ca8fcfb84caa2bfdea45eb368a88805002cd0f5e",
"0x030bf53bf4488484a117435c96d5d4cc74d56fd86062cb5a06296ab41b8dc3a6",
"0x67db665d1c5287ca8a04a877dfb7e6b9535897841832e7696968c8a1089c94bc",
"0xe5557e94871703a3d413cdd14f984b9e77896cb9848eb4fba3d2e5bed04bc5dc"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
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
