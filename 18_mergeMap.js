const { of, merge, interval, pipe, asyncScheduler, asapScheduler, queueScheduler, Observable } = require('rxjs');
const { mergeMap, map } = require('rxjs/operators');
 
const letters = of('a', 'b', 'c');
const result = letters.pipe(
  mergeMap(x => interval(1000).pipe(map(i => x+i))),
);
result.subscribe(x => console.log(x));