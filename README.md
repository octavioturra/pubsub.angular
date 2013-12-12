## PUBSUB.ANGULAR

Is a simple group of tools to use pubsub-js inside angular environment.

With a directive of pubsub, you can subscribe for any publish from pubsub factory.

```
  <div ps-subscribe="event|[container]"></div>
```

Event name to listen for. When *event* is published, callback function will fill data return container. Its default name is "data" but you can change it by filling *container*.

## UseCase

Inside your view:

```
  <div ps-subscribe="loaded">
    <div ng-if="!!data===false">
      <h1>Loading</h1>
    </div>
    
    <div ng-if="data.length!==0">
      <ul>
        <li ng-repeat="item in data">{{item.value}}</li>
      </ul>
    </div>
  </div>
```

In your controller:

```
 setTimeout(function(){
     ps.publish('loaded', [1,2,3]);
 },300);
```
