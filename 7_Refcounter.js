const { from, Subject, Observable, interval } = require('rxjs');
const { multicast, refCount } = require('rxjs/operators');
const chalk = require('chalk');
 
const source = interval(500);
const subject = new Subject();
const refCounted = source.pipe(multicast(subject), refCount());
let subscription1, subscription2;
 
// This calls `connect()`, because
// it is the first subscriber to `refCounted`
console.log(chalk.redBright('observerA subscribed'));
subscription1 = refCounted.subscribe({
  next: (v) => console.log(chalk.redBright(`observerA: ${v}`))
});
 
setTimeout(() => {
  console.log(chalk.greenBright('observerB subscribed'));
  subscription2 = refCounted.subscribe({
    next: (v) => console.log(chalk.greenBright(`observerB: ${v}`))
  });
}, 600);
 
setTimeout(() => {
  console.log(chalk.redBright('observerA unsubscribed'))
  subscription1.unsubscribe();
}, 1200);
 
// This is when the shared Observable execution will stop, because
// `refCounted` would have no more subscribers after this
setTimeout(() => {
  console.log(chalk.greenBright('observerB unsubscribed'))
  subscription2.unsubscribe();
}, 2000);
 
// Logs
// observerA subscribed
// observerA: 0
// observerB subscribed
// observerA: 1
// observerB: 1
// observerA unsubscribed
// observerB: 2
// observerB unsubscribed


