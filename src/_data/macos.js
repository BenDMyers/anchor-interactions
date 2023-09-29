const click = '<code>Click</code>';
const command = '<kbd>Cmd</kbd>';
const enter = '<kbd>Enter</kbd>';
const control = '<kbd>Ctrl</kbd>';
const option = '<kbd>Opt</kbd>';
const shift = '<kbd>Shift</kbd>';

const chrome = 'Chrome';
const edge = 'Edge';
const firefox = 'Firefox';
const safari = 'Safari';

const downloadTargetPage = 'Download target page';
const nothing = 'Nothing';
const openContextMenu = 'Open context menu';
const openInCurrentTab = 'Open in current tab';
const openNewTab = 'Open new tab and show';
const openNewWindow = 'Open new window';
const openBackgroundTab = 'Open tab in background';
const replaceAddressBarContents = 'Replace address bar contents';

/** @type {InteractionRecord[]} */
const interactions = [
	{
		interaction: [click],
		browsers: {
			[chrome]: openInCurrentTab,
			[firefox]: openInCurrentTab,
			[safari]: openInCurrentTab,
			[edge]: openInCurrentTab
		}
	},
	{
		interaction: [control, click],
		browsers: {
			[chrome]: openContextMenu,
			[firefox]: openContextMenu,
			[safari]: openContextMenu,
			[edge]: openContextMenu
		}
	},
	{
		interaction: [option, click],
		browsers: {
			[chrome]: downloadTargetPage,
			[firefox]: nothing,
			[safari]: downloadTargetPage,
			[edge]: downloadTargetPage
		},
		abnormal: [firefox]
	},
	{
		interaction: [command, click],
		browsers: {
			[chrome]: openBackgroundTab,
			[firefox]: openBackgroundTab,
			[safari]: openBackgroundTab,
			[edge]: openBackgroundTab
		},
	},
	{
		interaction: [shift, click],
		browsers: {
			[chrome]: openNewWindow,
			[firefox]: openNewWindow,
			[safari]: 'Save target to reading list',
			[edge]: openNewWindow
		},
		abnormal: [safari]
	},
	{
		interaction: [control, shift, click],
		browsers: {
			[chrome]: openContextMenu,
			[firefox]: openContextMenu,
			[safari]: openContextMenu,
			[edge]: openContextMenu
		}
	},
	{
		interaction: [command, shift, click],
		browsers: {
			[chrome]: openNewTab,
			[firefox]: openNewTab,
			[safari]: openNewTab,
			[edge]: openNewTab
		}
	},
	{
		interaction: [control, enter],
		browsers: {
			[chrome]: openInCurrentTab,
			[firefox]: nothing,
			[safari]: openInCurrentTab,
			[edge]: openInCurrentTab
		},
		abnormal: [firefox]
	},
	{
		interaction: [option, enter],
		browsers: {
			[chrome]: downloadTargetPage,
			[firefox]: nothing,
			[safari]: downloadTargetPage,
			[edge]: downloadTargetPage
		},
		abnormal: [firefox]
	},
	{
		interaction: [command, enter],
		browsers: {
			[chrome]: openBackgroundTab,
			[firefox]: openBackgroundTab,
			[safari]: openBackgroundTab,
			[edge]: openBackgroundTab
		}
	},
	{
		interaction: [shift, '<kbd>F10</kbd>'],
		browsers: {
			[chrome]: nothing,
			[firefox]: nothing,
			[safari]: nothing,
			[edge]: openContextMenu
		},
		abnormal: [edge]
	},
	{
		interaction: ['Dragging to address bar'],
		browsers: {
			[chrome]: replaceAddressBarContents,
			[firefox]: openInCurrentTab,
			[safari]: openInCurrentTab,
			[edge]: replaceAddressBarContents
		}
	},
	{
		interaction: ['Dragging to tab bar'],
		browsers: {
			[chrome]: openNewTab,
			[firefox]: openBackgroundTab,
			[safari]: 'Navigate existing tab to target',
			[edge]: openNewTab
		},
		abnormal: [safari]
	}
];

const browserHeadings = new Set();
for (const interactionRecord of interactions) {
	const {browsers} = interactionRecord;
	const browserNames = Object.keys(browsers);
	browserNames.forEach(name => browserHeadings.add(name));
}

module.exports = {
	interactions,
	browserHeadings: Array.from(browserHeadings)
};

/**
 * @typedef {object} BrowserMap
 * @property {string} Chrome
 * @property {string} Edge
 * @property {string} Firefox
 * @property {string} Safari
 */

/**
 * @typedef {object} InteractionRecord
 * @property {string[]} interaction
 * @property {BrowserMap} browsers
 * @property {string[]?} abnormal
 */