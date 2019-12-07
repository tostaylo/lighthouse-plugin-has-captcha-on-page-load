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
var CatAudit = /** @class */ (function (_super) {
    __extends(CatAudit, _super);
    function CatAudit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(CatAudit, "meta", {
        get: function () {
            return {
                id: 'has-cat-images-id',
                title: 'Page has least one cat image',
                failureTitle: 'Page does not have at least one cat image',
                description: 'Pages should have lots of cat images to keep users happy. ' +
                    'Consider adding a picture of a cat to your page improve engagement.',
                requiredArtifacts: ['ImageElements']
            };
        },
        enumerable: true,
        configurable: true
    });
    CatAudit.audit = function (artifacts) {
        console.log(artifacts, 'DLFHDLsdfsdfsdfsdf');
        // Artifacts requested in `requiredArtifacts` above are passed to your audit.
        // See the "API -> Plugin Audits" section below for what artifacts are available.
        var images = artifacts.ImageElements;
        var catImages = images.filter(function (image) { return image.resourceSize < 50000; });
        return {
            // Give users a 100 if they had a cat image, 0 if they didn't.
            score: catImages.length > 0 ? 1 : 0,
            // Also return the total number of cat images that can be used by report JSON consumers.
            numericValue: catImages.length
        };
    };
    return CatAudit;
}(Audit));
module.exports = CatAudit;
//# sourceMappingURL=has-something.js.map