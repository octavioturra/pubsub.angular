'use strict';

angular.module('pubsub.angular')
    .directive('subscribe', function (ps) {
        return {
            template: '<div ng-transclude></div>',
            transclude: true,
            link: function postLink(scope, element, attrs) {
                var attr = (attrs.subscribe || "").split('|');
                var context = {
                    event: 'broadcast',
                    data: 'data'
                };

                if (attr.length == 1) {
                    context.event = attr[0].trim();
                } else if (attr.length == 2) {
                    context.event = attr[0].trim();
                    context.container = attr[1].trim();
                }

                ps.subscribe(context.event, function (label, d) {
                    scope.label = label;
                    scope[context.data] = d;
                    scope.$digest();
                });
            }
        };
    });