const Audit = require('lighthouse').Audit;
interface ScriptElement {
	src: string;
}
class CaptchaAudit extends Audit {
	static get meta() {
		return {
			id: 'has-captcha-on-page-load',
			title: 'Page does not have captcha on page load',
			failureTitle: 'Captcha was found on page load.',
			description: `Captcha resources can be large and degrade page load performance. Make sure this page needs captcha resources on page load. 
      [More Info](https://github.com/tostaylo/lighthouse-plugin-has-captcha-on-page-load)`,
			requiredArtifacts: ['ScriptElements']
		};
	}

	static audit(artifacts: { ScriptElements: ScriptElement[] }, _context: any) {
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
