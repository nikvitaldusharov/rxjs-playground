
const { of, merge, interval, pipe, asyncScheduler, asapScheduler, queueScheduler, Observable } = require('rxjs');
const { switchMap, map } = require('rxjs/operators');

const switched = of(1, 2, 3).pipe(switchMap((x) => of(x, x ** 2, x ** 3)));
switched.subscribe(x => console.log(x));