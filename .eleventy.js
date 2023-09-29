const sass = require('eleventy-sass');
const kbd = require('markdown-it-kbd');

/**
 * @typedef {import('@11ty/eleventy/src/UserConfig')} EleventyConfig
 * @typedef {ReturnType<import('@11ty/eleventy/src/defaultConfig')>} EleventyReturnValue
 * @type {(eleventyConfig: EleventyConfig)) => EleventyReturnValue}
 */
module.exports = function (eleventyConfig) {
	eleventyConfig.addPlugin(sass);
	eleventyConfig.amendLibrary('md', md => md.use(kbd));

	const encodedUri = encodeURIComponent('https://anchor-interactions.netlify.app/')
	eleventyConfig.addGlobalData('openGraphImage', `https://v1.screenshot.11ty.dev/${encodedUri}/opengraph/`);
	
	return {
		dir: {
			input: 'src'
		}
	};
};