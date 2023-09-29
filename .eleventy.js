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
	
	return {
		dir: {
			input: 'src'
		}
	};
};