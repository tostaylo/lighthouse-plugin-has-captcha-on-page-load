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
                title: 'Page does not have captcha on page load',
                failureTitle: 'Captcha was found on page load.',
                description: "Captcha resources can be large and degrade page load performance. \n      They can also interfere with the accuracy of Lighthouse performance audits. \n      Make sure this page needs captcha resources on page load. \n      [More Info](https://github.com/tostaylo/lighthouse-plugin-has-captcha-on-page-load)",
                requiredArtifacts: ['ScriptElements']
            };
        },
        enumerable: true,
        configurable: true
    });
    CaptchaAudit.audit = function (artifacts, _context) {
        var elementsWithCaptcha = artifacts.ScriptElements.filter(function (element) { return element.src && element.src.includes('captcha'); });
        var hasCaptcha = elementsWithCaptcha.length > 0;
        var failure = {
            score: 0,
            scoreDisplayMode: 'binary',
            displayValue: elementsWithCaptcha.length + " Captcha requests found",
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