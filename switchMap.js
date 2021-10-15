const { of, merge, asyncScheduler, asapScheduler, queueScheduler, Observable, interval, concat } = require('rxjs');
const { subscribeOn, observeOn, switchMap, mergeMap } = require('rxjs/operators');

const switched = interval(1000).pipe(switchMap((x) => new Observable(subscriber => {
    setTimeout(() => {
        subscriber.next(x)
    },500)
    setTimeout(() => {
        subscriber.next(2 * x)
    },1000)
    setTimeout(() => {
        subscriber.next(3 * x)
    },1500)
})));
switched.subscribe(x => console.log(x));