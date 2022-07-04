# Fusion Web3 Domain

Nodejs SDK

Npm: https://www.npmjs.com/package/fsndomains

Github: https://github.com/FusionWeb3Domains/fsndomainjs

Before installing the package you need to check and be sure to install the packages below:

```
npm install web3 
```

Install Package

```
npm install fsndomains
```

Call 
```
const domainjs = require('fsndomainjs');
```

Set config
```
const config = 
{
	testnet:{
		rpcUrl: "",
		contactAddress: ""
	},
	mainnet:{ 
		rpcUrl: "https://mainnet.anyswap.exchange",
		contactAddress: "0xa1019535e6b364523949eaf45f4b17521c1cb074"
	},
	defaultNetwork: "mainnet"
}
```

Install

```
const sdk = domainjs.SDK(config);
```
```
// your domains
const _domain = "fusion.fsn";
	
// resolve domain to get the address of the owner.
const owner = await sdk.getOwner(_domain);

console.log(owner);

// your address
const _address = "xxx";

// get a domain default from a user's address, requiring the user to set the default domain name initially.
const domain = await sdk.getDomain(_address);

console.log(domain);
```
Pls update test.js for specific instructions

Thanks!



