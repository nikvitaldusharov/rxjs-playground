const { of, merge, asyncScheduler, asapScheduler, queueScheduler, Observable } = require('rxjs');
const { subscribeOn, observeOn, count } = require('rxjs/operators');

console.log("START");

counter = 0;
const observable = new Observable(subscriber => {
    counter++;
    const number = Math.floor(Math.random() * 100);
    subscriber.next(number + 1);
    subscriber.next(number + 2);
    subscriber.next(number + 3);
    if (counter === 3) {
        subscriber.error("BAD BAD BAD");
    } else {
        subscriber.complete();
    }
  });

observable.subscribe({
    next: x => { console.log(`result = ${x}`) },
    error: err => { console.log(err) },
    complete: () => { console.log('COMPLETE')}
});
observable.subscribe(x => console.log(`result = ${x}`));
observable.subscribe(x => console.log(`result = ${x}`), error => console.log(error));
observable.subscribe(x => console.log(`result = ${x}`), error => console.log(error), () => console.log("COMPLETE!!"));
console.log("END");

// function foo() {
//     console.log('Hello');
//     return 42;
//   }
  
//   const x = foo.call(); // same as foo()
//   console.log(x);
//   const y = foo.call(); // same as foo()
//   console.log(y);

// const foo = new Observable(subscriber => {
//     console.log('Hello');
//     subscriber.next(42);
//   });
   
//   foo.subscribe(x => {
//     console.log(x);
//   });
//   foo.subscribe(y => {
//     console.log(y);
//   });