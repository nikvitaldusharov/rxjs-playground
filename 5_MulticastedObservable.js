const { from, Subject, Observable, interval } = require('rxjs');
const { multicast } = require('rxjs/operators');
 
const source = interval(1000);
const subject = new Subject();
const multicasted = source.pipe(multicast(subject));
 
// These are, under the hood, `subject.subscribe({...})`:
multicasted.subscribe({
  next: (v) => console.log(`observerA: ${v}`)
});
multicasted.subscribe({
  next: (v) => console.log(`observerB: ${v}`)
});
 
// This is, under the hood, `source.subscribe(subject)`:
const subscription = multicasted.connect();

setTimeout(() => {
  subscription.unsubscribe();
}, 3000);