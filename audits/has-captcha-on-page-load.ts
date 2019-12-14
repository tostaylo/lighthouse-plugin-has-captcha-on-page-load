const Audit = require('lighthouse').Audit;
interface ScriptElement {
	src: string;
}
class CaptchaAudit extends Audit {
	static get meta() {
		return {
			id: 'has-captcha-on-page-load',
			title: 'Page does not have Captcha on page load',
			failureTitle: 'Captcha was found on page load.',
			//Markdown links supported here
			description:
				'Captcha resources can be large and degrade page load performance. Make sure this page needs the captcha resources on page load. Possibly lazy load instead Link to read me ',
			requiredArtifacts: ['ScriptElements']
		};
	}

	static audit(artifacts: { ScriptElements: ScriptElement[] }, _context: any) {
		//TODO: Add ts
		//TODO: Tests?
		//TODO: README
		//TODO: CI
		//TODO: Make adjustments to Lighthouse for tracking new field data and my plugin.
		//TODO: Write failure code for sites that have failed captcha
		//TODO: add link to readme in audits
		const elementsWithCaptcha = artifacts.ScriptElements.filter(
			(element: ScriptElement) => element.src && element.src.includes('captcha')
		);
		const hasCaptcha = elementsWithCaptcha.length > 0;
		const failure = {
			score: 0,
			scoreDisplayMode: 'binary',
			displayValue: `${elementsWithCaptcha.length} Captcha requests found`,
			explanation: '3 script tags were found',
			details: {
				type: 'table',
				headings: [
					{
						key: 'url',
						itemType: 'url',
						text: 'Captcha source'
					}
				],
				items: elementsWithCaptcha.map((item: ScriptElement) => ({ url: item.src }))
			}
		};

		const success = {
			score: 1,
			scoreDisplayMode: 'binary',
			displayValue: `0 Captcha requests found`
		};

		return hasCaptcha ? failure : success;
	}
}

module.exports = CaptchaAudit;
