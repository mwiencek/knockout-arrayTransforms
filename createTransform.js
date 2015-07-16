var ko = require('knockout');
var TransformBase = require('./TransformBase');

module.exports = function createTransform(name, proto) {
    function Transform() {}

    Transform.prototype = new TransformBase();
    ko.utils.extend(Transform.prototype, proto);

    ko.observableArray.fn[name] = function (callback, options) {
        var transform = new Transform();
        transform.init(this, callback, options);

        var initialState = this.peek();
        this.subscribe(transform.applyChanges, transform, 'arrayChange');

        transform.applyChanges(
            initialState.map(function (value, index) {
                return {status: 'added', value: value, index: index};
            })
        );

        return transform.state;
    };

    return Transform;
};
