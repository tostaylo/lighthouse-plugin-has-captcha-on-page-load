const Audit = require('lighthouse').Audit;

class CaptchaAudit extends Audit {
	static get meta() {
		return {
			id: 'has-captcha-on-page-load',
			title: 'Page does not have Captcha on page load',
			failureTitle: 'Captcha can interfere with Lighthouse audits.',
			description: 'Make sure your page needs Captcha on page load',
			requiredArtifacts: ['ScriptElements']
		};
	}

	static audit(artifacts: any, _context: { computedCache: any }) {
		const hasCaptcha =
			artifacts.ScriptElements.filter((element: any) => element.src && element.src.indexOf('captcha') > -1).length > 0;
		return {
			score: hasCaptcha ? 0 : 1,
			numericValue: 1
		};
	}
}

module.exports = CaptchaAudit;
