const sassOptions = {
	includePaths: ["./components", "./pages"],
	prependData: `
    @use "sass:math";
    @import "./styles/mediaqueries"; 
    @import "./styles/fonts";
  `,
};

export default async (phase, { defaultConfig }) => {
	/**
	 * @type {import('next').NextConfig}
	 */
	const nextConfig = {
		sassOptions,
		typescript: {
			ignoreBuildErrors: true,
		},
		eslint: {
			ignoreDuringBuilds: true,
		},
		devIndicators: {
			buildActivity: false,
		},
		experimental: {
			scrollRestoration: true,
		},
	};
	return nextConfig;
};
