const domainjs = require('fsndomainjs');
// set config
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

call();

async function call(){
	
	// install
	const sdk = domainjs.SDK(config);

	// change your domains
	const _domain = "fusion.fsn";
	
	// change your address
	const _address = "0x5aEa3F3f358347Abf94B554389174F966faeEfbB";
	
	// resolve domain to get the address of the owner. metadata: true // false default return metadata along with domain information
	const owner = await sdk.getOwner(_domain, false);

	console.log(owner);


	// get total domains
	const balance = await sdk.balanceOf(_address);

	console.log(balance);

	// get a domain default from a user's address, requiring the user to set the default domain name initially.
	const domain = await sdk.getDomain(_address);

	console.log(domain);
	
	// gets all the domains owned by an wallet address.
	const domains = await sdk.getDomains(_address);

	console.log(domains);
	
	//get a value of metadata from the domain name
	const _avatar = await sdk.getMetadata("avatar", _domain);

	console.log(_avatar);
	
	//get values of metadata from the domain name
	const _values = await sdk.getMetadatas(["avatar", "website", "twitter"], _domain);

	console.log(_values);
	
	//namehash is a recursive process that can generate a unique hash for any valid domain name.
	const hashname = await sdk.hashname(_domain);

	console.log(hashname);
}

