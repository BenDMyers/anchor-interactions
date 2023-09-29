const alt = '<kbd>Alt</kbd>';
const click = '<code>Click</code>';
const control = '<kbd>Ctrl</kbd>';
const enter = '<kbd>Enter</kbd>';
const middleClick = '<code>Middle Click</code>'
const rightClick = '<code>Right Click</code>'
const shift = '<kbd>Shift</kbd>';
const win = '<kbd>Win</kbd>';

const chrome = 'Chrome';
const edge = 'Edge';
const firefox = 'Firefox';

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
			[edge]: openInCurrentTab
		}
	},
	{
		interaction: [middleClick],
		browsers: {
			[chrome]: openBackgroundTab,
			[firefox]: openBackgroundTab,
			[edge]: openBackgroundTab
		}
	},
	{
		interaction: [rightClick],
		browsers: {
			[chrome]: openContextMenu,
			[firefox]: openContextMenu,
			[edge]: openContextMenu
		}
	},
	{
		interaction: [control, click],
		browsers: {
			[chrome]: openBackgroundTab,
			[firefox]: openBackgroundTab,
			[edge]: openBackgroundTab
		}
	},
	{
		interaction: [alt, click],
		browsers: {
			[chrome]: downloadTargetPage,
			[firefox]: nothing,
			[edge]: downloadTargetPage
		},
		abnormal: [firefox]
	},
	{
		interaction: [win, click],
		browsers: {
			[chrome]: openInCurrentTab,
			[firefox]: nothing,
			[edge]: openInCurrentTab
		},
		abnormal: [firefox]
	},
	{
		interaction: [shift, click],
		browsers: {
			[chrome]: openNewWindow,
			[firefox]: openNewWindow,
			[edge]: openNewWindow
		}
	},
	{
		interaction: [control, shift, click],
		browsers: {
			[chrome]: openNewTab,
			[firefox]: openNewTab,
			[edge]: openNewTab
		}
	},
	{
		interaction: [control, enter],
		browsers: {
			[chrome]: openBackgroundTab,
			[firefox]: openBackgroundTab,
			[edge]: openBackgroundTab
		}
	},
	{
		interaction: [alt, enter],
		browsers: {
			[chrome]: downloadTargetPage,
			[firefox]: nothing,
			[edge]: downloadTargetPage
		},
		abnormal: [firefox]
	},
	{
		interaction: [win, enter],
		browsers: {
			[chrome]: openInCurrentTab,
			[firefox]: nothing,
			[edge]: nothing
		},
		abnormal: [chrome]
	},
	{
		interaction: [shift, '<kbd>F10</kbd>'],
		browsers: {
			[chrome]: openContextMenu,
			[firefox]: openContextMenu,
			[edge]: openContextMenu
		}
	},
	{
		interaction: ['Dragging to address bar'],
		browsers: {
			[chrome]: replaceAddressBarContents,
			[firefox]: openInCurrentTab,
			[edge]: replaceAddressBarContents
		}
	},
	{
		interaction: ['Dragging to tab bar'],
		browsers: {
			[chrome]: openNewTab,
			[firefox]: openBackgroundTab,
			[edge]: openNewTab
		}
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