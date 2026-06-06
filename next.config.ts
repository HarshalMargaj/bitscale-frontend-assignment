import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "randomuser.me",
			},
			{
				protocol: "https",
				hostname: "img.youtube.com",
			},
			{
				protocol: "https",
				hostname: "cdn.simpleicons.org",
			},
			{
				protocol: "https",
				hostname: "www.google.com",
			},
			{
				protocol: "https",
				hostname: "*.google.com",
			},
		],
	},
};

export default nextConfig;
