'use strict'

var pubsubangular = angular.module('pubsub.angular', []);
pubsubangular.factory('ps', function () {
    var ps = window.PubSub;
    if(!!ps===false){
        throw new Error('Pubsub-js is a required dependency.');
    }
    return ps;
});

pubsubangular
    .directive('psSubscribe', function (ps) {
        return {
            template: '<div ng-transclude></div>',
            transclude: true,
            link: function postLink(scope, element, attrs) {
                var attr = (attrs.psSubscribe || "").split('|');
                var context = {
                    event: 'broadcast',
                    data: 'data'
                };

                if (attr.length == 1) {
                    context.event = attr[0].trim();
                } else if (attr.length == 2) {
                    context.event = attr[0].trim();
                    context.data = attr[1].trim();
                }

                ps.subscribe(context.event, function (label, d) {
                    scope.label = label;
                    scope[context.data] = d;
                    scope.$digest();
                });
            }
        };
    });
