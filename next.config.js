// next.config.js
module.exports = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "oaidalleapiprodscus.blob.core.windows.net",
				pathname: "/**",
			},
		],
	},
};
