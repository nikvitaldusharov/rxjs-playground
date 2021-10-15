const { ReplaySubject, Observable, asyncScheduler, from } = require('rxjs');
const { multicast, refCount, observeOn } = require('rxjs/operators');

const obs = from([10, 20, 30]).pipe(observeOn(asyncScheduler));
obs.subscribe(x => {
    console.log(x);
})
console.log('test')



// Logs:
// observerA: 1
// observerA: 2
// observerA: 3
// observerA: 4
// observerB: 2
// observerB: 3
// observerB: 4
// observerA: 5
// observerB: 5