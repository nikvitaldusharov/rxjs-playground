const { of, merge, asyncScheduler, asapScheduler, queueScheduler, Observable } = require('rxjs');
const { subscribeOn, observeOn, map } = require('rxjs/operators');

 
const clicks = of({ x: 100 }).pipe(map(ev => ev.x));
const higherOrder = clicks.pipe(
  map(ev =>
     interval(Math.random() * 2000).pipe(take(3))
  ),
  take(2)
);
const result = higherOrder.pipe(
  combineAll()
);
 
result.subscribe(x => console.log(x));