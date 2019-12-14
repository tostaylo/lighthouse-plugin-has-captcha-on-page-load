"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Audit = require('lighthouse').Audit;
var CaptchaAudit = /** @class */ (function (_super) {
    __extends(CaptchaAudit, _super);
    function CaptchaAudit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(CaptchaAudit, "meta", {
        get: function () {
            return {
                id: 'has-captcha-on-page-load',
                title: 'Page does not have Captcha on page load',
                failureTitle: 'Captcha was found on page load.',
                //Markdown links supported here
                description: 'Captcha resources can be large and degrade page load performance. Make sure this page needs the captcha resources on page load. Possibly lazy load instead Link to read me ',
                requiredArtifacts: ['ScriptElements']
            };
        },
        enumerable: true,
        configurable: true
    });
    CaptchaAudit.audit = function (artifacts, _context) {
        //TODO: Add ts
        //TODO: Tests?
        //TODO: README
        //TODO: CI
        //TODO: Make adjustments to Lighthouse for tracking new field data and my plugin.
        //TODO: Write failure code for sites that have failed captcha
        //TODO: add link to readme in audits
        var elementsWithCaptcha = artifacts.ScriptElements.filter(function (element) { return element.src && element.src.includes('captcha'); });
        var hasCaptcha = elementsWithCaptcha.length > 0;
        var failure = {
            score: 0,
            scoreDisplayMode: 'binary',
            displayValue: elementsWithCaptcha.length + " Captcha requests found",
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
                items: elementsWithCaptcha.map(function (item) { return ({ url: item.src }); })
            }
        };
        var success = {
            score: 1,
            scoreDisplayMode: 'binary',
            displayValue: "0 Captcha requests found"
        };
        return hasCaptcha ? failure : success;
    };
    return CaptchaAudit;
}(Audit));
module.exports = CaptchaAudit;
//# sourceMappingURL=has-captcha-on-page-load.js.map