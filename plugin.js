"use strict";
module.exports = {
    // Additional audits to run on information Lighthouse gathered.
    audits: [{ path: 'lighthouse-plugin-has-captcha-on-page-load/audits/has-captcha-on-page-load.js' }],
    // A new category in the report for the plugin output.
    category: {
        title: 'Captcha',
        description: 'Captcha appearing on page load can interfere with Lighthouse audits',
        auditRefs: [{ id: 'has-captcha-on-page-load', weight: 1 }]
    }
};
//# sourceMappingURL=plugin.js.map