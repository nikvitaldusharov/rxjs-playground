const { of, merge, asyncScheduler, asapScheduler, queueScheduler, Observable, Subject } = require('rxjs');
const { subscribeOn, observeOn, count } = require('rxjs/operators');
 
const subject = new Subject();
 
subject.subscribe({
  next: (v) => console.log(`observerA: ${v}`),
  complete: () => console.log(`observerA complete!`)
});
subject.subscribe({
  next: (v) => console.log(`observerB: ${v}`),
  complete: () => console.log(`observerB complete!`)
});
 
subject.next(1);
subject.next(2);
subject.complete();