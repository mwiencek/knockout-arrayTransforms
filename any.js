var ko = require('knockout');

module.exports = require('./createTransform')(
    'any',
    ko.utils.extend({
        getTruthiness: function () {
            return this.truthinessCount > 0;
        }
    }, require('./allOrAny'))
);

ko.observableArray.fn.some = ko.observableArray.fn.any;
