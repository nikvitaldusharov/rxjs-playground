const { ReplaySubject, Observable } = require('rxjs');
const { multicast, refCount } = require('rxjs/operators');
const chalk = require('chalk');

const source = new Observable(subscriber => {
    const str = `${Math.random()} new number`;
    console.log('Execution!!:' + str);
    subscriber.next(str);
    setTimeout(() => {
        const str = `2 ${Math.random()} new number`;
        console.log('2 Execution!!:' + str);
        subscriber.next(str);
    }, 1000);
    setTimeout(() => {
        const str = `3 ${Math.random()} new number`;
        console.log('3 Execution!!:' + str);
        subscriber.next(str);
    }, 2000);
    setTimeout(() => {
        const str = `4 ${Math.random()} new number`;
        console.log('4 Execution!!:' + str);
        subscriber.next(str);
    }, 4000);
    setTimeout(() => { subscriber.complete() }, 5000);
});

const subject = new ReplaySubject(2); // buffer 2 values for new subscribers

const refCounted = source.pipe(multicast(subject), refCount());

let subscription1, subscription2;

subscription1 = refCounted.subscribe({
   next: (v) => console.log(chalk.redBright(`#AAA#: ${v}`))
});

setTimeout(() => {
    subscription2 = refCounted.subscribe({
        next: (v) => console.log(chalk.greenBright(`#BBB#: ${v}`))
    })
}, 3000);

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