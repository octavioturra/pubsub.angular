'use strict';

angular.module('pubsub.angular', [])
    .factory('ps', function () {
        return window.PubSub;
    });