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
                failureTitle: 'Captcha can interfere with Lighthouse audits.',
                description: 'Make sure your page needs Captcha on page load',
                requiredArtifacts: ['ScriptElements']
            };
        },
        enumerable: true,
        configurable: true
    });
    CaptchaAudit.audit = function (artifacts, _context) {
        var hasCaptcha = artifacts.ScriptElements.filter(function (element) { return element.src && element.src.indexOf('captcha') > -1; }).length > 0;
        return {
            score: hasCaptcha ? 0 : 1,
            numericValue: 1
        };
    };
    return CaptchaAudit;
}(Audit));
module.exports = CaptchaAudit;
//# sourceMappingURL=has-captcha-on-page-load.js.map