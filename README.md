# lighthouse-plugin-has-captcha-on-page-load

This is a plugin for Google Lighthouse. The plugin's sole purpose is to identify captcha scripts found on page load.

## Motivation

To identify whether certain web pages have captcha scripts which interfere with Lighthouse performance audits. Doing automated Lighthouse testing on a sample of websites I noticed some sites had suspiciously high scores. I tested the suspicious sites with Lighthouse manually and observed a Captcha page was being loaded instead of the actual content for the url given. I suspect this may be due to running Chrome in incognito mode while testing but have not confirmed.
[Repo](https://github.com/tostaylo/lighthouse-plugin-has-captcha-on-page-load)

## Install

Requires Node.js `10+` and Lighthouse `5+`.

```bash
$ npm install lighthouse-plugin-has-captcha-on-page-load
```

## Usage

Use the plugin with [Lighthouse CLI](https://github.com/GoogleChrome/lighthouse) or Node.js.

### CLI

Pass plugin to Lighthouse:

```bash
$ lighthouse https://www.github.com/ --plugins=lighthouse-plugin-has-captcha-on-page-load
```

### Node.js

```js
const { lighthouse } = require('lighthouse');

lighthouse('https://www.github.com', {
	plugins: ['lighthouse-plugin-has-captcha-on-page-load']
}).then(result => {
	console.log(result);
});
```
