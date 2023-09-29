# Anchor Tag Interactions Across Browsers

**Howdy!** [Anchor Tag Interactions Across Browsers](https://anchor-interactions.netlify.app/) is a microsite for aggregating the ways various browsers react to key/mouse interactions with `<a href>` links.

## Contributing

**Contributions are welcome!** This can come from reaching out to me with issues you see, or by contributing fixes directly.

### Reaching Out

If you have an issue or inaccuracy to report, either:

- [Let me know on Mastodon](https://a11y.info/@ben)
- Or, [file an issue on this repo](https://github.com/BenDMyers/anchor-interactions/issues)

### Contributing Code Fixes

#### Git Workflow for Contributions

This repo uses a ["fork and pull request" workflow](https://docs.github.com/en/get-started/quickstart/contributing-to-projects) for code contributions. That linked tutorial is really good, and walks you through all of the steps needed from the Git side of things to contribute.

#### Node Setup

This microsite is built with [Eleventy](https://11ty.dev/), a static site generator that runs on [Node.js](https://nodejs.org/en).

To run the code locally after you've cloned it:

1. [Install Node](https://nodejs.org/en), if you haven't already.
1. In your terminal, navigate to your cloned repo.
1. Install dependencies with `npm install`.
1. Run `npm run dev` to run the live development server. You can stop the dev server by returning to your terminal and hitting `Ctrl-C` on Windows or `Cmd-C` on macOS a few times.

Whenever the dev server is running, you'll be able to see the live updates at [`http://localhost:8080`](http:localhost:8080).

#### Project Structure

The underlying data can be found in `src/_data/`.

The markup that renders the tables can be found at `src/index.html`.